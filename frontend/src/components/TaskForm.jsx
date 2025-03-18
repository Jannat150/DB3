// src/components/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm() {
    const [input,setInput]=useState({
        title:"",
        description:"",
        completed:""
    })
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setInput({...input,[name]:value})
        console.log({...input,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response=await fetch("http://localhost:5000/tasks",{
                method:'POST',
                headers:{
                    content:'application/json',
                },
                body:JSON.stringify(input)
            })

            if(response.ok){
                const result=await response.json()
                console.log(result)
                
            }else{
                console.log("error is")
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <>
            {/* Task form */}
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='Add Task title' value={input.title} onChange={handleInputChange}/>
                <input type='text' name='description' placeholder='Add task description' value={input.description} onChange={handleInputChange}/>
                <input type='text' name='completed' placeholder='completed or/not' value={input.completed} onChange={handleInputChange}/>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default TaskForm;
