
// TaskItem component
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TaskItem = () => {
    const [data,setData]=useState()
    const id=useParams() 
    const fetchdata=async()=>{
        const response=await fetch(`http://localhost:5000/tasks/${id}`)
        const result=await response.json()
        setData(result)
        console.log(result)

    } 
    useEffect(()=>{
        fetchdata()
    },[]) 
    


  return (
    <div>
      
    </div>
  )
}

export default TaskItem
