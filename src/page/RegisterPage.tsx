import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <div className="my-10">
        {" "}
        <h1 className="mb-2 text-3xl text-center">
          Khám phá thế giới của Placeney
        </h1>
        <p className="font-thin text-center ">
          Đăng ký ngay để hưởng những ưu đãi tuyệt dzoi
        </p>
      </div>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default RegisterPage;
