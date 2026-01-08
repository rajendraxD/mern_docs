import { Divider } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
    return (
        <>
            <div className='text-[clamp(1rem,5vw,2.5rem)] font-semibold top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 select-none'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <span className='text-red-800'>404</span>
                    {/* <span className='flex mx-2 hidden md:block'>|</span> */}
                    <Divider orientation="horizontal" variant="middle" flexItem  className='mx-2! md:hidden '/>
                    <Divider orientation="vertical" variant="middle" flexItem  className='mx-2! hidden md:block'/>
                    <span className='text-zinc-700'> Page Not Found</span>
                </div>
            </div>
        </>
    )
}

export default PageNotFound