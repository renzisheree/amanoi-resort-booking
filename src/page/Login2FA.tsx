import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login2FA = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (!/^[0-9]*$/.test(value)) return; // Allow only numeric characters

    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[name] = value;

      // Autofill remaining input fields on paste
      if (name === "0" && value.length === 1) {
        for (let i = 1; i < newOTP.length; i++) {
          newOTP[i] = value;
        }
      }

      return newOTP;
    });
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text");
    const firstDigit = pasteData.charAt(0);

    if (!/^[0-9]*$/.test(firstDigit)) return; // Allow only numeric characters

    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      for (let i = 0; i < newOTP.length; i++) {
        newOTP[i] = i < pasteData.length ? pasteData.charAt(i) : "";
      }
      return newOTP;
    });
  };

  const handleVerifyClick = () => {
    const otpValue = otp.join("");

    axios({
      method: "POST",
      url: "http://localhost:3000/auth/verify/2fa",
      data: { otp: otpValue },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (res) {
        const { data } = res;
        console.log(res);

        if (!data.access_token) {
          toast.error(res.data.error);
          return;
        }
        document.cookie = `token=${data.access_token};expires=${new Date(
          Date.now() + 86400
        ).toUTCString()}`;

        if (res.data.access_token != null) {
          toast.success("OTP verification successful");
          navigate("/");
        }
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div>
      <div className="mx-auto flex flex-col justify-center gap-10 items-center max-w-[80%] h-[60vh] border border-gray-300 rounded-3xl ">
        <div className="flex flex-col p-40">
          <div className="text-xl italic text-center">
            TWO-FACTOR <br />
            <span className="text-3xl">AUTHENTICATION</span>
          </div>
          <div className="text-sm italic text-center text-gray-500">
            Enter your 6-digit code that has been sent to your mail
          </div>
          <div className="flex gap-5 py-10 p-x-40">
            <input
              type="text"
              name="0"
              className="w-full px-5 py-5 text-center"
              value={otp[0]}
              onChange={handleInputChange}
              onPaste={handlePaste}
              pattern="[0-9]"
              maxLength={1}
            />
            <input
              type="text"
              name="1"
              className="w-full px-5 py-5 text-center"
              value={otp[1]}
              onChange={handleInputChange}
              maxLength={1}
              pattern="[0-9]"
            />
            <input
              type="text"
              name="2"
              className="w-full px-5 py-5 text-center"
              value={otp[2]}
              onChange={handleInputChange}
              maxLength={1}
              pattern="[0-9]"
            />
            <input
              type="text"
              name="3"
              className="w-full px-5 py-5 text-center"
              value={otp[3]}
              onChange={handleInputChange}
              maxLength={1}
              pattern="[0-9]"
            />
            <input
              type="text"
              name="4"
              className="w-full px-5 py-5 text-center"
              value={otp[4]}
              onChange={handleInputChange}
              maxLength={1}
              pattern="[0-9]"
            />
            <input
              type="text"
              name="5"
              className="w-full px-5 py-5 text-center"
              value={otp[5]}
              onChange={handleInputChange}
              maxLength={1}
              pattern="[0-9]"
            />
          </div>
          <button
            className="w-full p-5 bg-[#3B4F4C] font-semibold text-white rounded-lg"
            onClick={() => {
              handleVerifyClick();
              console.log(123);
            }}
          >
            Verify
          </button>
          <div className="py-5 text-center underline">Return to login site</div>
        </div>
      </div>
    </div>
  );
};

export default Login2FA;
