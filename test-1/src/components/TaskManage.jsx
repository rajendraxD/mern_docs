import React, { useContext } from 'react'
import Tasks from './Tasks'
import AddTask from './AddTask'
import { TaskContext } from '../contexts/taskContext'

const TaskManage = () => {
    const { allTask } = useContext(TaskContext);

    return (
        <>
            <div className='flex gap-3 flex-col m-3 justify-center items-center'>
                <div className='w-full'><AddTask /></div>
                <hr className='w-full bg-gray-200 border-0 dark:bg-gray-700' />
                <div className='w-full flex flex-wrap gap-2 '>
                    <Tasks allTask={allTask} />
                </div>
            </div>
        </>
    )
}

export default TaskManage