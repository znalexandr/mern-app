import React, { ReactNode } from 'react';

import * as S from './PublicLayout.styles';

type Props = {
  children: ReactNode;
};

export function PublicLayout(props: Props) {
  const { children } = props;

  return (
    <S.PublicLayout>
      <S.Container>
        <S.Logo />
        <S.Content>{children}</S.Content>
        <p className="mt-5 mb-3 text-muted text-center">© 2020</p>
      </S.Container>
    </S.PublicLayout>
  );
}
