import React, { useEffect, useMemo } from 'react'
import Layout from './Layout'
import useThemeStore from './stores/useThemeStore';
import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
        },
      }),
    [theme]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App