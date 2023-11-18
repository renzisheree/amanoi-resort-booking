import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MiddleLogo from "../components/MiddleLogo";

interface ProfileProps {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  country: string;
}
interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileProps>({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    country: "",
  });
  const [passwordData, setPasswordData] = useState<PasswordData>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    if (cookieValue) {
      axios
        .get(`http://localhost:3000/auth/me`, {
          headers: {
            Authorization: `Bearer ${cookieValue}`,
          },
        })
        .then((res) => {
          const { data } = res;
          console.log(data);
          setProfileData(data);
        });
    }
  }, []);
  const navigate = useNavigate();
  const cookieValue = Cookies.get("token");

  const handleDeleteCookies = () => {
    Cookies.remove("token");
    navigate("/login");
    toast.success("Logout successful");
  };
  const handleConfirm = () => {
    if (passwordData.newPassword === passwordData.confirmNewPassword) {
      const updatedProfileData = {
        firstname: profileData.firstname,
        lastname: profileData.lastname,
        phone: profileData.phone,
        country: profileData.country,
        email: profileData.email,
        currentPassword: passwordData.oldPassword,
        password: passwordData.newPassword,
      };
      axios
        .patch("http://localhost:3000/auth/me", updatedProfileData, {
          headers: { Authorization: `Bearer ${cookieValue}` },
        })
        .then((response) => {
          toast.success(response.data.message);
        })
        .catch((response) => {
          toast.error(response.data.message);
        });
    }

    // Send data to API
  };

  // Collect profile data

  return cookieValue ? (
    <div className="flex justify-center items-center gap-20">
      <MiddleLogo
        srcImg="https://www.aman.com/themes/custom/aman/logo.svg
            "
        width={300}
      ></MiddleLogo>
      <div className="flex font-body flex-col w-[500px] items-start justify-start gap-10 text-xl font-light">
        <div className="flex">
          <div className="w-[200px]">First Name : </div>{" "}
          {isEditing ? (
            <input
              className="p-2 border-[1px] border-gray-400"
              value={profileData.firstname}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  firstname: e.target.value,
                }))
              }
            />
          ) : (
            <span>{profileData.firstname}</span>
          )}
        </div>
        <div className="flex">
          <div className="w-[200px]">Last Name : </div>{" "}
          {isEditing ? (
            <input
              className="p-2 border-[1px] border-gray-400"
              value={profileData.lastname}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  lastname: e.target.value,
                }))
              }
            />
          ) : (
            <span>{profileData.lastname}</span>
          )}
        </div>
        <div className="flex">
          <div className="w-[200px]">Phone number : </div>{" "}
          {isEditing ? (
            <input
              className="p-2 border-[1px] border-gray-400"
              value={profileData.phone}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
          ) : (
            <span>{profileData.phone}</span>
          )}
        </div>
        <div className="flex">
          <div className="w-[200px]">Country : </div>{" "}
          {isEditing ? (
            <input
              className="p-2 border-[1px] border-gray-400"
              value={profileData.country}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  country: e.target.value,
                }))
              }
            />
          ) : (
            <span>{profileData.country}</span>
          )}
        </div>
        <div className="flex">
          <div className="w-[200px]">Email : </div>{" "}
          {isEditing ? (
            <input
              className="p-2 border-[1px] border-gray-400"
              value={profileData.email}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          ) : (
            <span>{profileData.email}</span>
          )}
        </div>
        {isEditing && (
          <div className="flex flex-col gap-10">
            <div className="text-red-400 text-sm  ">*NOT REQUIRED</div>

            <div className="flex ">
              {" "}
              <div className="w-[200px]">Current Password : </div>
              <input
                className="p-2 border-[1px] border-gray-400"
                value={passwordData.oldPassword}
                onChange={(e) =>
                  setPasswordData((prev) => ({
                    ...prev,
                    oldPassword: e.target.value,
                  }))
                }
                placeholder="Old password"
              />
            </div>

            <div className="flex ">
              {" "}
              <div className="w-[200px]">New Password : </div>
              <input
                className="p-2 border-[1px] border-gray-400"
                value={passwordData.newPassword}
                onChange={(e) => {
                  setPasswordData((prev) => ({
                    ...prev,
                    newPassword: e.target.value,
                  }));
                }}
                placeholder="New password"
              />
            </div>
            <div className="flex ">
              {" "}
              <div className="w-[200px]">Confirm Password : </div>
              <input
                className="p-2 border-[1px] border-gray-400"
                value={passwordData.confirmNewPassword}
                onChange={(e) => {
                  setPasswordData((prev) => ({
                    ...prev,
                    confirmNewPassword: e.target.value,
                  }));
                }}
                placeholder="Confirm new password"
              />
            </div>
          </div>
        )}
        <div className="flex gap-10 justify-center items-center">
          {" "}
          <button
            onClick={handleDeleteCookies}
            className="px-5 py-2 border font-thin bg-[#E6E2DB] {
            
          }] "
          >
            Đăng xuất
          </button>
          <button
            onClick={() => setIsEditing((prev) => !prev)}
            className={`px-5 py-2 border font-thin bg-[#E6E2DB] ${
              isEditing ? "hidden" : ""
            } `}
          >
            Chỉnh sửa
          </button>
          <button
            onClick={() => {
              handleConfirm();
              setIsEditing((prev) => !prev);
            }}
            className={`px-5 py-2 border font-thin bg-[#E6E2DB] ${
              isEditing ? "" : "hidden"
            } `}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="">fail</div>
  );
};

export default ProfilePage;
