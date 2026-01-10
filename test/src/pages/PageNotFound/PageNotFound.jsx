import { Divider } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
    return (
        <>
            <div className=' h-full flex items-center justify-center text-[clamp(1.3rem,5vw,3rem)] font-semibold  select-none'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <span className='text-red-800'>404</span>
                    <Divider orientation="horizontal" variant="middle" flexItem className='mx-2! md:hidden' />
                    <Divider orientation="vertical" variant="middle" flexItem className='mx-2! hidden md:block' />
                    <span className='text-zinc-700'> Page Not Found</span>
                </div>
            </div>
        </>
    )
}

export default PageNotFound