import { DarkMode, LightMode, Menu, Person } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import useDevice from '../utils/useMediaQuery';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { isMobile } = useDevice();

  return (
    <>
      <div className="flex justify-between items-center p-2">
        {isMobile &&
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={18} />
          </IconButton>
        }
        {!isMobile &&
          <span className='text-[clamp(1rem,5vw,2rem)] font-semibold'>Good Morning🌤️</span>
        }

        <div>
          <IconButton>
            <Person size={18} />
          </IconButton>
        </div >
      </div >
    </>
  )
}

export default Header