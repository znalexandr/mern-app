import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export function RegisterForm(props: Props) {
  return (
    <>
      RegisterForm <Link to="/auth/login">войти</Link>
    </>
  );
}
