import React, { useState } from "react";

export default function AddTask(){
     const [task, setTask] = useState('')

     const handleChange = e =>{
          setTask(e.target.value)
     }
     const handleSubmit = e =>{
          const data = new FormData(e.target)
          e.preventDefault()
          setTask(data.get("task"))
          console.log(task);
     }
     
     return(
          <form onSubmit={handleSubmit}>
               <input type="text" placeholder="add task" value={task} onChange={handleChange} />
               <button>Add</button>
          </form>
     )
}