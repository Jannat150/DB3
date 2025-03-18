
// src/components/TaskList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function TaskList() {
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const handleClick=(id)=>{
        navigate(`/item/${id}`)
    }
    const fetchdata=async()=>{
        try{
            const response=await fetch("http://localhost:5000/tasks")
            const result=await response.json()
            if(response.ok){
                console.log(result)
                setData(result)
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return (
        <>
            {/* Task list */}
            {data.map((i,idx)=>(
                <div key={idx}>
                    <h1>tasks: {i.title}</h1>
                    <h2>description: {i.description}</h2>
                    <h2>Completed: {i.completed}</h2>
                    <button onClick={()=>handleClick(i._id)}>view</button>
                </div>
            ))}
        </>
    );
}

export default TaskList;
