import { FC } from 'react';
import { Button, Input, PAlert } from '../ui';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserRegisterCreds } from '../interfaces';
import { useAppDispatch, SingInStartAction, SingUpStartAction } from '../store';

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
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IUserRegisterCreds> = (data) => {
    isRegister ? dispatch(SingUpStartAction(data)) : dispatch(SingInStartAction(data));
  };
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        {false && <div className="text-red-600">Invalid login or password</div>}
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
        <Link to={isRegister ? '/game/login' : '/game/register'}>
          {isRegister ? 'Log In' : 'Crete a New Account'}
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
