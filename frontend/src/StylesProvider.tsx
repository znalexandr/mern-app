import React, { ReactNode } from 'react';
import { CacheProvider, Global, css } from '@emotion/core';
import createCache from '@emotion/cache';

const cache = createCache({
  prefix: () => {
    return process.env.NODE_ENV === 'production';
  }
});

const styles = css`
  html {
    width: 100%;
    font-size: 8px;
  }

  body {
    margin: 0;
    width: 100%;
    font-size: 2rem;
  }

  #app {
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    &.blurred {
      filter: blur(3px);
    }
  }

  div {
    box-sizing: border-box;
  }

  input,
  textarea {
    box-sizing: border-box;
    user-select: auto;
  }

  button {
    box-sizing: border-box;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: none;
  }
`;

type Props = {
  children: ReactNode;
};

export function StylesProvider(props: Props) {
  const { children } = props;

  return (
    <CacheProvider value={cache}>
      <Global styles={styles} />
      {children}
    </CacheProvider>
  );
}
