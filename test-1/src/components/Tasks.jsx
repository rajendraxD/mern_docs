import React, { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../contexts/taskContext';

const Tasks = () => {
    const { allTask, filteredTasks, search } = useContext(TaskContext);

    return (
        // <>{!allTask.length
        //     ?
        //     <span className='text-2xl text-center font-semibold w-full'>No Task Found</span>
        //     :
        //     allTask.map((task) => (
        //         <Task key={task.id} task={task} />
        //     ))

        // }
        // </>
        <>
            {allTask.length === 0
                ?
                <>
                    <div className='flex justify-center items-center w-100'>
                        <span className='text-2xl font-semibold'>No Task Found</span>
                    </div>
                </>
                :
                <>
                    {filteredTasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))}
                    {filteredTasks.length === 0 && (
                        <span className='text-2xl font-semibold'>No tasks match "{search}"</span>
                        // <p>No tasks match "{'search'}"</p>
                    )}
                </>
            }
        </>
    )
}

export default Tasks