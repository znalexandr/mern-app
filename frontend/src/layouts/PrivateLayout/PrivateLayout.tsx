import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function PrivateLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <h2>Private layout</h2>
      {children}
    </>
  );
}
