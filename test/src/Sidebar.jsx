import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar
} from '@mui/material';
import {
  Home as HomeIcon,
  Dashboard,
  People,
  Settings
} from '@mui/icons-material'; 


const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 256, // ~20% equivalent, adjust as needed
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 256,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5', // Optional: custom bg
        },
      }}
      open // Always open for permanent
    >
      <Toolbar /> {/* Offset for fixed Header/AppBar */}
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, to: '/' },
          { text: 'Dashboard', icon: <Dashboard />, to: '/profile' },
          { text: 'Users', icon: <People />, to: '/users' },
        ].map((item) => (
          <ListItemButton key={item.text} component="a" href={item.to}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: 'Settings', icon: <Settings />, to: '/settings' },
        ].map((item) => (
          <ListItemButton key={item.text} component="a" href={item.to}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
