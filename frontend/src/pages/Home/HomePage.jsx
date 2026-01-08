import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <div className='p-2 flex flex-col h-screen'>
        <div className='text-3xl font-bold mb-8'>HomePage</div>
        <div className='flex justify-around flex-wrap gap-2'>
          <Card sx={{ minWidth: 200 , maxWidth: 200 }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Word of the Day
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 200 , maxWidth: 200 }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Word of the Day
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 200 , maxWidth: 200 }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Word of the Day
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 200 , maxWidth: 200 }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Word of the Day
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>

      </div>
    </>
  )
}

export default HomePage