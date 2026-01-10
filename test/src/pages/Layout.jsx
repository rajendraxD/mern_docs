import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Person, Settings, LightMode, DarkMode, Logout, Dashboard, Home, AssignmentInd } from '@mui/icons-material';
import useThemeStore from '../stores/useThemeStore';
import useDevice from '../utils/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from 'react';


const drawerWidth = 240;

/* ---------------- drawer mixins ---------------- */

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

/* ---------------- AppBar ---------------- */

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})(({ theme, open, isMobile }) => ({
  // backgroundColor: theme.palette.background.default,
  // color: theme.palette.text.primary,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && !isMobile && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

/* ---------------- Drawer ---------------- */

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

/* ---------------- Drawer Header ---------------- */

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

/* ---------------- Component ---------------- */

export default function Layout() {
  const theme = useTheme();
  const { themeMode, toggleTheme } = useThemeStore();
  const isMobile = useDevice().isMobile;

  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  // const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const location = useLocation();
  React.useEffect(() => {
    setTitle(""); // Or setTitle("Page Not Found")
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    isMobile ? setMobileOpen((v) => !v) : setOpen((v) => !v);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogoutMenuBtnClick = () => {
    localStorage.removeItem('token');
    // navigate('/login');
    console.log('Logout')
  }

  const sidebarMenu = [{
    title: 'Dashboard',
    icon: <Dashboard />,
    url: '/dashboard',
    matchPaths: ['/', '/dashboard']
  }, {
    title: 'Profile',
    icon: <AssignmentInd />,
    url: '/profile',
  },
    // {
    //   title: 'Logout',
    //   icon: <Logout />,
    // }
  ]
  const drawerContent = (
    <>
      <DrawerHeader>
        <IconButton onClick={() => (isMobile ? setMobileOpen(false) : setOpen(false))}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <List className='overflow-y-auto overflow-x-hidden'>

        {sidebarMenu.map((menu, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }} >
            <ListItemButton
              component={menu.url ? Link : undefined}
              to={menu.url || undefined} // Only set 'to' if url exists
              selected={menu.matchPaths?.includes(location.pathname) || menu.url === location.pathname}
              sx={{
                minHeight: 48,
                justifyContent: open || isMobile ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open || isMobile ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {menu.icon}
              </ListItemIcon>

              <ListItemText
                primary={menu.title}
                sx={{ opacity: open || isMobile ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Dark setting */}
      <List className='mt-auto!'>
        <Divider className='m-2!' />
        <ListItem disablePadding
          sx={{ display: 'block', }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open || isMobile ? 'initial' : 'center',
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open || isMobile ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Settings />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open || isMobile ? 1 : 0 }}
            >Settings</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </>
  );




  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} isMobile={isMobile}>
        <Toolbar className='flex justify-between'>
          <div className='flex justify-center items-center'>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, ...(open && !isMobile && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </div>
          <div className='flex justify-center items-center'>
            <IconButton onClick={() => toggleTheme()} color='inherit'>
              {
                themeMode === 'light' ? <LightMode size={18} /> : <DarkMode size={18} />
              }
            </IconButton>

            <div>
              {/* <Button
                  id="basic-button"
                  aria-controls={openMenu ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Dashboard
                </Button> */}

              <IconButton aria-label="" color="inherit" onClick={handleMenuClick}>
                <Person />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleMenuClose}
                slotProps={{
                  list: {
                    'aria-labelledby': 'basic-button',
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose} disabled>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose} disabled>Settings</MenuItem>
                <MenuItem onClick={handleLogoutMenuBtnClick}>Logout</MenuItem>
              </Menu>
            </div>


          </div>

        </Toolbar>
      </AppBar>

      {/* Desktop */}
      {!isMobile ? (
        <Drawer variant="permanent" open={open}>
          {drawerContent}
        </Drawer>
      ) : (
        /* Mobile */
        <MuiDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
        >
          {drawerContent}
        </MuiDrawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 2, height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' } }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
