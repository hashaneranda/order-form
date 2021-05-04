import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { useThemeValue } from './themeContext';
import GlobalStyle from './global';

interface ThemeProps {
  children: React.ReactNode | React.ReactNode[];
}

const Theme = ({ children }: ThemeProps) => {
  const [{ theme }] = useThemeValue();

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default Theme;
