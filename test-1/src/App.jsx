import React from 'react'
import Header from './components/Header'
import TaskManage from './components/TaskManage'
import TaskContextProvider from './contexts/taskContext'
const App = () => {
  return (
    <>
      <TaskContextProvider>
        <Header />
        <TaskManage />
      </TaskContextProvider>
    </>
  )
}

export default App