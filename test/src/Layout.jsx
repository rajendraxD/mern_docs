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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Person, DarkMode, LightMode } from '@mui/icons-material';
// import useThemeStore from '../../frontend/src/stores/useThemeStore';


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
  // backgroundColor: '#1E1F20', // or use theme.palette.primary.main
  // color: '#ffffff',
  // backgroundColor: theme.palette.primary.main,
  // color: theme.palette.primary.contrastText,

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

export default function MiniDrawer() {
  const theme = useTheme();
  // const {themeMode,toggleTheme}=useThemeStore();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    isMobile ? setMobileOpen((v) => !v) : setOpen((v) => !v);
  };

  const drawerContent = (
    <>
      <DrawerHeader>
        <IconButton onClick={() => (isMobile ? setMobileOpen(false) : setOpen(false))}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        {/* <IconButton onClick={() => toggleTheme()}>
          {
          themeMode === 'light' ? <LightMode size={18} /> : <DarkMode size={18} />
          }
        </IconButton> */}
      </DrawerHeader>

      <Divider />

      <List className='overflow-y-auto overflow-x-hidden'>
        {['Inbox', 'Starred', 'Send email'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }} >
            <ListItemButton
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
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText
                primary={text}
                sx={{ opacity: open || isMobile ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Dark setting */}
      <List className='mt-auto!'>
      <Divider className='m-2!'/>
        <ListItem disablePadding sx={{ display: 'block' }} >
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
              <DarkMode />
            </ListItemIcon>
            <ListItemText
              sx={{ opacity: open || isMobile ? 1 : 0 }}
            >Dark Mode</ListItemText>
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
              Header
            </Typography>
          </div>
          <div className='flex justify-center items-center'>
            <IconButton aria-label="" color="inherit">
              <Person />
            </IconButton>
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

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography>
          This content shifts on desktop and stays fixed on mobile.
        </Typography>
      </Box>
    </Box>
  );
}
