import React, { useContext, useMemo } from 'react'
import IconButton from '@mui/material/IconButton'
import Person from '@mui/icons-material/Person'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Search from '@mui/icons-material/Search'
import { TaskContext } from '../contexts/taskContext'

const Header = () => {
  
  const { allTask, setFilteredTasks, search, setSearch } = useContext(TaskContext);


  // ✅ Debounced filter logic
  const filteredTasks = useMemo(() => {
    if (!search.trim()) return allTask;
    return allTask.filter((task) => {
      return task.name.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
    }
    );
  }, [allTask, search]);
  // Update filtered tasks in context
  React.useEffect(() => {
    setFilteredTasks(filteredTasks);
  }, [filteredTasks, setFilteredTasks]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <div className='w-full h-15 bg-gray-200 flex flex-col justify-center'>
        <div className='flex justify-between items-center p-5'>
          <div ><span className='text-2xl font-semibold'>
            Task Manager
          </span> </div>
          <div>
            <TextField
              id=""
              label=""
              size='small'
              name='search'
              value={search}
              onChange={onChangeHandler}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end"><Search /></InputAdornment>,
                },
              }}
            />
            <IconButton aria-label="" >
              <Person />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header