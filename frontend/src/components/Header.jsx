import { DarkMode, LightMode, Menu, Person } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import useThemeStore from '../stores/useThemeStore';
import useDevice from '../utils/useMediaQuery';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme, toggleTheme } = useThemeStore();
  const { isMobile } = useDevice();

  return (
    <>
      <div className="flex justify-between items-center p-2">
        {isMobile &&
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={18} />
          </IconButton>
        }
        <div>Logo</div>
        <div>
          {theme === 'light' ?
            <IconButton aria-label="" onClick={toggleTheme}>
              <LightMode size={18} />
            </IconButton > : <IconButton aria-label="" onClick={toggleTheme}>
              <DarkMode size={18} />
            </IconButton>
          }
          <IconButton>
            <Person size={18} />
          </IconButton>
        </div >
      </div >
    </>
  )
}

export default Header