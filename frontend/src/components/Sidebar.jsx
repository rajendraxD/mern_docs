import React from 'react'
import { Link, useLocation } from 'react-router-dom';  // Rename to avoid conflict
import useThemeStore from '../stores/useThemeStore';
import useDevice from '../utils/useMediaQuery';
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Menu, Person, Settings } from '@mui/icons-material'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme } = useThemeStore();
  const { isMobile } = useDevice();
  const location = useLocation();
  // const [selectedIndex, setSelectedIndex] = React.useState(0);
  // const navigate = useNavigate();

  // const handleItemClick = (index, url) => {
  //   setSelectedIndex(index);
  //   // setSidebarOpen(false);  // Close mobile sidebar
  //   if (url !== '#') { navigate(url) };
  // };
  // React.useEffect(() => {
  //   // Default to first item or based on path
  //   setSelectedIndex(0);
  // }, []);
  const sidebarItems = [
    { icon: Home, label: 'Home', url: '/home', matchPaths: ['/', '/home'] },
    { icon: Person, label: 'Profile', url: '/profile' },
    { icon: Settings, label: 'Settings', url: '/settings' },
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
              <List dense={false}>
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
              <ListItemButton>
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