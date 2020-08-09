import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AuthActions } from '@/domains/auth';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export function RegisterForm() {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    try {
      await AuthActions.register(data);

      toast.success('Вы успешно зарегистрировались!');
      document.location.href = '/';
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <section>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Регистрация</h1>
        <p>
          Если у вас есть аккаунт{' '}
          <Link to="/auth/login">Войдите в систему</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            name="name"
            id="name"
            className="form-control"
            placeholder="Введите ваше имя"
            ref={register({
              required: 'Обязательное поле'
            })}
          />
          {errors?.name && (
            <div className="text-danger">{errors.name?.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            className="form-control"
            placeholder="Введите email"
            ref={register({
              required: 'Обязательное поле',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Некоректный email адрес'
              }
            })}
          />
          {errors?.email && (
            <div className="text-danger">{errors.email?.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            name="password"
            type="password"
            id="password"
            className="form-control"
            placeholder="Введите пароль"
            ref={register({
              required: 'Обязательное поле'
            })}
          />
          {errors?.password && (
            <div className="text-danger">{errors.password?.message}</div>
          )}
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}
