import React, { useEffect, useMemo } from 'react'
import Layout from './pages/Layout';
import useThemeStore from './stores/useThemeStore';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProfilePage from './pages/Profile/ProfilePage';

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
      {/* <Layout /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
          <Route path='*' element={<div> Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App