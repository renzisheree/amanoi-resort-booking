import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";

interface ProfileProps {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  country: string;
}
const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileProps>({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    country: "",
  });
  const cookieValue = Cookies.get("token");

  const handleDeleteCookies = () => {
    Cookies.remove("token");
  };
  if (cookieValue) {
    axios
      .get(`http://localhost:3000/auth/me`, {
        headers: {
          Authorization: `Bearer ${cookieValue}`,
        },
      })
      .then((res) => {
        const { data } = res;
        setProfileData(data);
      });
  }

  return cookieValue ? (
    <div className="flex justify-center items-center gap-20">
      <img
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=2531&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={500}
        height={420}
      />
      <div className="flex flex-col items-center justify-center gap-10 text-xl font-light">
        <span>{profileData.firstname}</span>
        <span>{profileData.lastname}</span>
        <span>{profileData.phone}</span>
        <span>{profileData.email}</span>
        <span>{profileData.country}</span>
        <button onClick={handleDeleteCookies}>Clear</button>
      </div>
    </div>
  ) : (
    <div className="">fail</div>
  );
};

export default ProfilePage;
