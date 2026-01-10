import React, { useEffect, useMemo } from 'react'
import Layout from './Layout'
import useThemeStore from './stores/useThemeStore';
import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const { themeMode } = useThemeStore();

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(themeMode);
  }, [themeMode]);

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <Layout />
    </ThemeProvider>
  )
}

export default App