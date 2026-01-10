import React, { useEffect } from 'react'
import Card from './Card'
import InboxIcon from '@mui/icons-material/Inbox';
import Person from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import Settings from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import { useOutletContext } from 'react-router-dom';
import Table from './Table';

const DashboardPage = () => {
    const { setTitle } = useOutletContext(); // Get from context
    useEffect(() => {
        if (setTitle) {
            setTitle('Dashboard')
        }
    }, [setTitle])

    const cards = [
        { title: 'Total Revenue', value: '$45,231', icon: <InboxIcon color="primary" />, trend: '+12%' },
        { title: 'Active Users', value: '2,345', icon: <Person color="secondary" />, trend: '+3%' },
        { title: 'New Orders', value: '120', icon: <MailIcon color="success" />, trend: '+18%' },
        { title: 'Pending Tasks', value: '15', icon: <Settings color="warning" />, trend: '-2%' },
    ];

    return (
        <>
            <div className='flex flex-col' aria-label='Dashboard'>
                <Box component="section" className='grow px-3 py-8 md:py-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Render the cards */}
                        {cards.map((card, index) => (
                            <Card key={index} title={card.title} value={card.value} icon={card.icon} trend={card.trend} />
                        ))}
                    </div>
                </Box>

                <Box component="section" className='grow px-3 my-5' >
                    <Table />
                </Box>
            </div>
        </>
    )
}

export default DashboardPage