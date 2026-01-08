import React, { useEffect, useMemo } from 'react'
import useThemeStore from './stores/useThemeStore';
import { createTheme, ThemeProvider } from '@mui/material';
import HomePage from './pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LoginPage from './pages/Login/LoginPage';
import ProfilePage from './pages/Profile/ProfilePage';
import SettingPage from './pages/Settings/SettingPage';

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
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/settings' element={<SettingPage />} />
            {/* <Route path="/*" element={<div className='text-5xl flex flex-row items-center justify-center h-screen'><span className='text-red-800'>404</span> <span className='flex mx-2'>|</span><span> Page Not Found</span> </div>} /> */}
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
