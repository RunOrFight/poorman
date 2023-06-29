import { FC } from 'react';
import { Button, Input, PAlert } from '../ui';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInMutation, useSignUpMutation } from '../api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserRegisterCreds } from '../interfaces';
import { LOGIN_ROUTE } from '../constants';

interface IAuthPageProps {
  type: 'login' | 'register';
}

const AuthPage: FC<IAuthPageProps> = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterCreds>();
  const isRegister = type === 'register';
  const navigate = useNavigate();
  // const location = useLocation();
  const [signIn, { isError }] = useSignInMutation();
  const [signUp] = useSignUpMutation();
  // const from = location.state?.from?.pathname || "/";

  const onSubmit: SubmitHandler<IUserRegisterCreds> = (data) => {
    isRegister
      ? signUp(data)
          .unwrap()
          .then(() => navigate(LOGIN_ROUTE))
          .catch(() => alert('Registration not working'))
      : signIn(data)
          .unwrap()
          .then(() => {
            // navigate(from, { replace: true });
            navigate('/');
          });
  };
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        {isError && <div className="text-red-600">Invalid login or password</div>}
        {isRegister && (
          <>
            <label>Name</label>
            <Input
              type="text"
              {...register('name', { required: true, setValueAs: (value) => value.trimEnd() })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
          </>
        )}
        {errors.name?.type === 'required' && <PAlert>Name is required</PAlert>}
        <label>Email</label>
        <Input
          type="text"
          {...register('email', { required: true, setValueAs: (value) => value.trimEnd() })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && <PAlert>Email is required</PAlert>}
        <label>Password</label>
        <Input
          type="password"
          {...register('password', { required: true, setValueAs: (value) => value.trimEnd() })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password?.type === 'required' && <PAlert>Password is required</PAlert>}

        <Button type="submit">Ok</Button>
      </form>
      <div className="pt-5 text-blue-grey underline">
        <Link to={isRegister ? LOGIN_ROUTE : '/register'}>
          {isRegister ? 'Log In' : 'Crete a New Account'}
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
