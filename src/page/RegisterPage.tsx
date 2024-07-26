import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <div className="my-10">
        {" "}
        <h1 className="mb-2 text-3xl text-center">
          Discover the world of Placeney
        </h1>
        <p className="font-thin text-center ">
          Join our mailing list for exclusive offers and the latest news from
          Placeney Group
        </p>
      </div>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default RegisterPage;
