import { FC, FormEventHandler, useState } from "react";
import { Button, Input } from "../components";
import { useAuth } from "../services";
import { useLocation, useNavigate } from "react-router-dom";

interface IAuthPageProps {
  type: "login" | "register";
}

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const {signIn} = useAuth();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn({email: email.trimEnd(), password: password.trimEnd()}, ()=>{
      navigate(from, { replace: true });
    })
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label>Email</label>
      <Input onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <label>Password</label>
      <Input onChange={(e)=>setPassword(e.target.value)} value={password}/>
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
