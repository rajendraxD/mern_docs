import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import useThemeStore from '../stores/useThemeStore';
import useDevice from '../utils/useMediaQuery';
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { DarkMode, Home, LightMode, Menu, Person, Settings } from '@mui/icons-material'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme, toggleTheme } = useThemeStore();
  const { isMobile } = useDevice();
  const location = useLocation();

  const sidebarItems = [
    { icon: Home, label: 'Home', url: '/home', matchPaths: ['/', '/home'] },
    { icon: Person, label: 'Profile', url: '/profile' },
    // { icon: Settings, label: 'Settings', url: '/settings' },
  ];
  return (
    <>
      <div className={`
                ${theme === 'light' ? 'bg-[#E9EEF6]' : 'bg-[#1E1F20]'} 
                ${isMobile
          ?
          (sidebarOpen ? 'min-w-60 absolute z-100 h-full  translate-x-0' : '-translate-x-full hidden opacity-0')
          :
          (sidebarOpen ? 'min-w-60' : 'w-15')
        }
        flex flex-col`}
      >
        <div className="flex gap-3 p-2">
          <div className='flex flex-col w-full'>
            <div className='flex justify-between'>
              <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}  >
                <Menu size={18} />
              </IconButton>
              {sidebarOpen &&
                <IconButton aria-label="" onClick={toggleTheme}>
                  {theme === 'light' ? <LightMode size={18} /> : <DarkMode size={18} />}
                </IconButton>
              }

            </div>

            {sidebarOpen &&
              <div className="flex flex-col justify-center items-center">
                <Avatar alt="Rajendra kumar" src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }} />
                <span className='text-[20px] font-semibold max-w-60 truncate '>Rajendra kumar</span>
                <span className='text-[14px] text-zinc-500 max-w-60 truncate'>rajendraxd1@gmail.com</span>
              </div>
            }
          </div>
        </div>

        <Divider></Divider>
        {/* SIDEBAR CONTENT like NavMenu */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {/* <div className="space-y-2"> */}
          <Box className={`
              ${theme === 'light' ? 'bg-[#E9EEF6]' : 'bg-[#1E1F20]'}
              w-full max-w-60`}>
            <nav aria-label="Nav">
              <List dense={true}
              sx={{
                //  paddingX: 0.5,
                 display: 'flex',
                 flexDirection: 'column',
                 gap: 1,
                //  marginX:0.5,
                //  borderRadius: 10

              }}
              >
                {sidebarItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton component={Link} to={item.url}
                      selected={item.matchPaths?.includes(location.pathname) || item.url === location.pathname}
                    >
                      <ListItemIcon>
                        <item.icon />
                      </ListItemIcon>
                      {sidebarOpen && <ListItemText primary={item.label} />}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
            {/* <Divider /> */}
          </Box>
          {/* </div> */}
        </div>
        <Divider />
        <div className='mt-auto '>
          <List dense={false}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/settings">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary={sidebarOpen && 'Settings'} />
              </ListItemButton>
            </ListItem>

          </List>
        </div>
      </div>
    </>
  )
}

export default Sidebar