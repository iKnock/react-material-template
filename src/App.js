import React from 'react';

import Landing from './container/Landing'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Indie Flower',
      'cursive',
    ].join(','),
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Landing />
      </div>
    </ThemeProvider>
  );
}
