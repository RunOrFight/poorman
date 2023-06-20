import { FC, FormEventHandler, useState } from "react";
import { Button, Input } from "../ui";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInMutation } from "../api";

interface IAuthPageProps {
  type: "login" | "register";
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  const [signIn, { isError }] = useSignInMutation();

  // const from = location.state?.from?.pathname || "/";

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn({ email: email.trimEnd(), password: password.trimEnd() })
      .unwrap()
      .then(() => {
        // navigate(from, { replace: true });
        navigate("/");
      });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      {isError && <div className="text-red-600">Invalid login or password</div>}
      <label>Email</label>
      <Input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <Input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button type="submit">Ok</Button>
    </form>
  );
};

const AuthPage: FC<IAuthPageProps> = ({ type }) => {
  return (
    <div className="flex justify-center items-center h-full">
      {type === "login" ? <LoginForm /> : null}
    </div>
  );
};

export default AuthPage;
