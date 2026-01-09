import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import useDevice from '../utils/useMediaQuery'
import Sidebar from '../components/Sidebar'


export default function Layout() {
    const { isMobile } = useDevice();
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSidebarOpen(!isMobile)
    }, [isMobile])
    return (
        <>
            <div className='flex w-full h-screen overflow-y-auto overflow-x-hidden'>

                {/* SIDEBAR */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* ← MOBILE BACKDROP HERE: renders OVER sidebar when open */}
                {isMobile && sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* MAIN */}
                <main className="flex-1 flex flex-col relative">

                    {/* HEADER */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    {/* Home */}
                    <Outlet />
                </main>
            </div>
        </>
    )
}
