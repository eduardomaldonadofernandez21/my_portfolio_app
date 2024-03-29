import React from 'react'

import theme from "../themes/default";
import GlobalStyles from './globals';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default Theme;