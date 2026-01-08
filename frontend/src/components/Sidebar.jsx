import React from 'react'
import useThemeStore from '../stores/useThemeStore';
import useDevice from '../utils/useMediaQuery';
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Menu, Person, Settings } from '@mui/icons-material'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme } = useThemeStore();
  const { isMobile } = useDevice();

  const sidebarItems = [
    { icon: Home, label: 'Home' },
    { icon: Person, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
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
            <div className=''>
              <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}  >
                <Menu size={18} />
              </IconButton>
            </div>
            
            {sidebarOpen &&
              <div className="flex flex-col justify-center items-center">
                <Avatar alt="Rajendra kumar" src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }} />
                <span className='text-[20px] font-semibold'>Rajendra kumar</span>
                <span className='text-[15px] text-zinc-500'>rajendraxd1@gmail.com</span>
              </div>
            }
          </div>
        </div>

        <Divider />
        {/* SIDEBAR CONTENT like NavMenu */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="space-y-1">
            <Box className={`
              ${theme === 'light' ? 'bg-[#E9EEF6]' : 'bg-[#1E1F20]'}
              w-full max-w-60`}>
              <nav aria-label="Nav">
                <List dense={false}>
                  {sidebarItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
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
          </div>
        </div>
        <Divider />
        <div className='mt-auto space-y-2'>
          <List dense={false}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                {sidebarOpen && <ListItemText primary="Settings" />}
              </ListItemButton>
            </ListItem>

          </List>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Sidebar