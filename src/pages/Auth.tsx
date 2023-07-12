import {FC, memo, useCallback, useEffect} from 'react';
import { Button, Input, PAlert } from '../ui';
import {Link, useNavigate} from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserRegisterCreds } from '../interfaces';
import { useAppDispatch, SingInStartAction, SingUpStartAction, useAuthSelector } from '../store';
import st from './Auth.module.pcss';
import {RedirectedToSignInAction} from "../store/Auth";
import {LOGIN_ROUTE} from "../constants";

interface IAuthPageProps {
  type: 'login' | 'register';
}

const AuthPage: FC<IAuthPageProps> = memo(({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegisterCreds>({ reValidateMode: 'onChange' });
  const navigate = useNavigate();
  const isRegister = type === 'register';
  const dispatch = useAppDispatch();
  const isError = useAuthSelector().isError;
  const isSignedUp = useAuthSelector().signedUp;

  useEffect(() => {
    if (isRegister && isSignedUp) {
      navigate(LOGIN_ROUTE);
      dispatch(RedirectedToSignInAction());
    }
  }, [isSignedUp]);

  const onSubmit: SubmitHandler<IUserRegisterCreds> = useCallback(
    (data) => {
      isRegister ? dispatch(SingUpStartAction(data)) : dispatch(SingInStartAction(data));
    },
    [dispatch, isRegister]
  );

  return (
    <div className="flex justify-center items-center h-full flex-col">
      <span className={st.title}>{!isRegister ? 'Sign in' : 'Registration'}</span>
      <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit(onSubmit)}>
        {isError && <div className="text-red-600">Something wrong</div>}
        {isRegister && (
          <div className={st.input_container}>
            <Input
              type="text"
              {...register('name', { required: true, setValueAs: (value) => value.trimEnd() })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>
        )}
        {errors.name?.type === 'required' && <PAlert>Name is required</PAlert>}
        <div className={st.input_container}>
          <Input
            type="text"
            {...register('email', {
              required: true,
              setValueAs: (value) => value.trimEnd().toLowerCase(),
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email?.type === 'required' && <PAlert>Email is required</PAlert>}
        </div>
        <div className={st.input_container}>
          <Input
            type="password"
            {...register('password', { required: true, setValueAs: (value) => value.trimEnd() })}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password?.type === 'required' && <PAlert>Password is required</PAlert>}
        </div>

        <div className={st.button_container}>
          <Button type="submit">continue</Button>
        </div>
      </form>
      <div className={st.switch}>
        <Link to={isRegister ? '/game/login' : '/game/register'}>
          {isRegister ? 'Log In' : 'Crete a New Account'}
        </Link>
      </div>
    </div>
  );
});

export default AuthPage;
