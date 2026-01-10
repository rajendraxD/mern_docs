import React, { useEffect } from 'react'
import Card from './Card'
import InboxIcon from '@mui/icons-material/Inbox';
import Person from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import Settings from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import { useOutletContext } from 'react-router-dom';

const DashboardPage = () => {
    const { setTitle } = useOutletContext(); // Get from context
    useEffect(() => {
        setTitle('Dashboard')
    }, [setTitle])
    return (
        <>
            <div className='flex flex-col' aria-label='Dashboard'>
                <Box component="main" sx={{ flexGrow: 1, px: 3 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card title="Total Revenue" value="$45,231" icon={<InboxIcon color="primary" />} trend="+12%" />
                        <Card title="Active Users" value="2,345" icon={<Person color="secondary" />} trend="+3%" />
                        <Card title="New Orders" value="120" icon={<MailIcon color="success" />} trend="+18%" />
                        <Card title="Pending Tasks" value="15" icon={<Settings color="warning" />} trend="-2%" />
                    </div>
                </Box>
            </div>
        </>
    )
}

export default DashboardPage