import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <div className="my-10">
        {" "}
        <h1 className="text-3xl text-center mb-2">
          Discover the world of Aman
        </h1>
        <p className="text-center font-thin ">
          Join our mailing list for exclusive offers and the latest news from
          Aman Group
        </p>
      </div>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default RegisterPage;
