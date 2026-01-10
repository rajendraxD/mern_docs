import React, { useEffect, useMemo } from 'react'
import Layout from './pages/Layout';
import useThemeStore from './stores/useThemeStore';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProfilePage from './pages/Profile/ProfilePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

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
            <Route path='/' index element={<DashboardPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App