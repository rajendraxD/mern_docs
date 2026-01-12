import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { TaskContext } from '../contexts/taskContext'

const initialState = {
  id: null,
  name: '',
  description: '',
  isCompleted: false
}
const AddTask = () => {
  const { allTask, setAllTask, editTask, setEditTask } = useContext(TaskContext);
  const [formData, setFormData] = React.useState(initialState);
  React.useEffect(() => {
    if (editTask) {
      setFormData(editTask)
    } else {
      setFormData(initialState);
    }
  }, [editTask])
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const { type } = e.target
    const val = type === "checkbox" ? e.target.checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: val,
    }));
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.description.trim()) {
      return;
    }
    if (editTask?.id) {
      const newTaskList = allTask.map((oldTask) => oldTask.id === editTask.id ? formData : oldTask)
      setAllTask(newTaskList)
      setEditTask(null);
    } else {
      const newId = allTask.length ? Math.max(...allTask.map((task) => task.id)) + 1 : 1;
      setAllTask((oldData) => [...oldData, { ...formData, id: newId }])
    }
    setFormData(initialState);
  }
  const onResetHandler = () => {
    setFormData(initialState);
    setEditTask(null);
  }
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
        <TextField
          id=""
          label="Name"
          size='small'
          variant='outlined'
          name='name'
          value={formData.name}
          onChange={onChangeHandler}
          className='w-2/2 md:w-1/4'
        />
        <TextField
          id=""
          label="Description"
          size='small'
          variant='outlined'
          name='description'
          value={formData.description}
          onChange={onChangeHandler}
          className='w-2/2 md:w-1/4'
        />

        <div className='w-2/2 md:w-1/4'>
          <FormControlLabel control={<Checkbox color='success' size='small' className='mx-2!' name='isCompleted' checked={formData.isCompleted} onChange={onChangeHandler} />} className='select-none' label="Completed" />
        </div>
        <div className='w-2/2 md:w-2/4 flex  gap-2 md:gap-1'>
          <Button variant='contained' size='small' className='normal-case! w-full' onClick={(e) => onSubmitHandler(e)}> {editTask?.id ? 'Update Task' : 'Add Task'}</Button>
          <Button variant="contained" color="error" size='small' className=' normal-case! w-full' onClick={onResetHandler} disabled={!formData.name.trim() && !formData.description.trim()}>
            Reset
          </Button>
        </div>
      </div>
    </>
  )
}

export default AddTask