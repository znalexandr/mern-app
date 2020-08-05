import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export function LoginForm(props: Props) {
  return (
    <form>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Войти в систему</h1>
        <p>
          Авторизуйтесь или если у Вас нет аккаунта{' '}
          <Link to="/auth/register">зарегистрируйтесь</Link>
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Введите email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Введите пароль"
        />
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Запомнить меня
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Войти
      </button>
    </form>
  );
}
