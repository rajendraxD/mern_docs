import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import { TaskContext } from '../contexts/taskContext'

const Task = ({ task }) => {
    const { editTask, noEditHandler, onDeleteHandler } = useContext(TaskContext);
    return (
        <>
            <Box className='max-w-100!'>
                <Card variant="outlined" className={`min-w-50 ${task.isCompleted ? 'bg-green-200!' : 'bg-yellow-200!'}`}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {task.name}
                        </Typography>


                        <Typography variant="body2">
                            {task.description}
                        </Typography>
                    </CardContent>
                    <CardActions className='flex justify-between '>
                        <Button variant="contained" color="primary" size='small' className=' normal-case! w-full' onClick={() => { noEditHandler(task) }} disabled={task.id === editTask?.id} >
                            Edit
                        </Button>
                        <Button variant="contained" color="error" size='small' className=' normal-case! w-full' onClick={() => { onDeleteHandler(task) }} disabled={task.id === editTask?.id}>
                            Delete
                        </Button>

                    </CardActions>
                </Card>
            </Box >
        </>
    )
}

export default Task


// import Badge from '@mui/material/Badge'
// import Button from '@mui/material/Button'
// import React, { useContext } from 'react'
// import Card from '@mui/material/Card'
// import Box from '@mui/material/Box';
// import CardContent from '@mui/material/CardContent'
// import Typography from '@mui/material/Typography'
// import CardActions from '@mui/material/CardActions'
// import { TaskContext } from '../contexts/taskContext'

// const Task = ({ task }) => {
//     const { editTask, noEditHandler, onDeleteHandler } = useContext(TaskContext);
//     return (
//         <>
//             <Box className='max-w-100!'>
//                 <Card variant="outlined" className={`min-w-50 ${task.isCompleted ? 'bg-green-200!' : 'bg-yellow-200!'}`}>
//                     <CardContent>
//                         <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
//                             {task.name}
//                         </Typography>


//                         <Typography variant="body2">
//                             {task.description}
//                         </Typography>
//                     </CardContent>
//                     <CardActions className='flex justify-between '>
//                         <Button variant="contained" color="primary" size='small' className=' normal-case! w-full' onClick={() => { noEditHandler(task) }} disabled={task.id === editTask?.id} >
//                             Edit
//                         </Button>
//                         <Button variant="contained" color="error" size='small' className=' normal-case! w-full' onClick={() => { onDeleteHandler(task) }} disabled={task.id === editTask?.id}>
//                             Delete
//                         </Button>

//                     </CardActions>
//                 </Card>
//             </Box >
//         </>
//     )
// }

// export default Task