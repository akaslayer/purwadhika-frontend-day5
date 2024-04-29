import React, { useState } from 'react'
import img1 from '../assets/Checked.png'
import img2 from '../assets/Unchecked.png'

interface CardProps {
  desc: string,
  status: boolean
}

const TaskItem: React.FC<CardProps> = ({ desc, status }) => {
  const [taskStatus, setTaskStatus] = useState(status)

  function handleChange() {
    setTaskStatus(taskStatus => !taskStatus)
  }
  return (
    <div className="flex items-center justify-start gap-1">
      {taskStatus ? (<><img src={img1} alt="" onClick={() => handleChange()} /> <h2 className='line-through text-grey'> {desc}</h2></>) : <><img src={img2} alt="" onClick={() => handleChange()} /> <h2 > {desc}</h2></>}
    </div>
  )
}

export default TaskItem