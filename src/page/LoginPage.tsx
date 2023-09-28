import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <div className="my-5">
        {" "}
        <h1 className="text-3xl text-center mb-2">
          Discover the world of Aman
        </h1>
        <p className="text-center font-thin ">
          Join our mailing list for exclusive offers and the latest news from
          Aman Group
        </p>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
