import { DarkMode, LightMode, Logout, Menu, Person, Search } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import useDevice from '../utils/useMediaQuery';
import { useNavigate } from 'react-router-dom';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('token');
    navigate("/login")
  }
  return (
    <>
      <div className="flex justify-between items-center p-2">
        {isMobile &&
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={18} />
          </IconButton>
        }
        {!isMobile &&
          <div className=' flex flex-col'>
            <span className='text-[clamp(0.2rem,2vw,1.5rem)] font-semibold'>Good Morning🌤️</span>
            <span className='text-[clamp(0.2rem,1.5vw,.8rem)] font-light'>Crush today, code tomorrow.</span>
          </div>
        }
        <div>
          {/* <TextField
            id="search-field"
            size="small"
            placeholder="Search..."
            // value={searchValue}
            // onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search/>
                </InputAdornment>
              )
            }}
          /> */}
        </div>
        <div>
          <IconButton>
            <Person size={18} />
          </IconButton>
          <IconButton onClick={onLogout}>
            <Logout size={18} />
          </IconButton>
        </div >
      </div >
    </>
  )
}

export default Header