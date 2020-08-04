import styled from '@emotion/styled';

import LogoIcon from '../logo.svg';

export const PublicLayout = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: auto;
`;

export const Content = styled.div`
  padding: 15px;
`;

export const Logo = styled(LogoIcon)`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto 16px;
`;
