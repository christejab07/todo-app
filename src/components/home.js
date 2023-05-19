import React, { useState } from 'react';
import './styles.css';

function TodoApp() {
     const [todos, setTodos] = useState([]);
     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
     const [editIndex, setEditIndex] = useState(null)

     const handleTitleChange = (event) => {
          setTitle(event.target.value);
     };

     const handleDescriptionChange = (event) => {
          setDescription(event.target.value);
     };

     const handleAddTodo = () => {
          setTodos([...todos, { title, description, completed: false }]);
          console.log({ title, description });
          setTitle('');
          setDescription('');
     };

     const handleDeleteTodo = (index) => {
          setTodos(todos.filter((_, i) => i !== index));
     };
// another way to edit the user
     /* const handleEditTodo = (index) => {
           const newTitle = prompt('Enter new title', todos[index].title);
           const newDescription = prompt('Enter new description', todos[index].description);
           setTodos(todos.map((todo, i) => i === index ? { ...todo, title: newTitle, description: newDescription } : todo));
           console.log(newTitle, newDescription);
      }; */
     const handleEditTodo = (index) => {
          setEditIndex(index);
          setTitle(todos[index].title);
          setDescription(todos[index].description);
     };

     const handleSaveEdit = () => {
          setTodos(todos.map((todo, i) => i === editIndex ? { ...todo, title, description } : todo));
          setEditIndex(null);
          setTitle('');
          setDescription('');
     };
     const handleCancelEdit = () => {
          setEditIndex(null);
          setTitle('');
          setDescription('');
     };
     const handleToggleCompleted = (index) => {
          setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
     };

     return (
          <div className='container'>
               <h1 className='heading'>Todo List App</h1>
               <p>Organize the tasks for you at the right time so that you can have a good day, week, month, year and experience a better life.</p>
               <input type="text" placeholder="Title" value={title} id='title' onChange={handleTitleChange} required />
               <textarea type="text" placeholder="Description" value={description} id='description' onChange={handleDescriptionChange} required />
               {editIndex === null ? (
                    <button onClick={handleAddTodo}>Add Todo</button>
               ) : (
                    <>
                         <button onClick={handleSaveEdit}>Save</button>
                         <button onClick={handleCancelEdit}>Cancel</button>
                    </>
               )}
               <ol>
                    <h1>Your tasks will appear here</h1>
                    {todos.map((todo, index) => (
                         <li key={index}>
                              <h2 style={{ textDecoration: todo.completed ? 'line-through solid rgb(214, 87, 214)' : 'none' }}>Title: {todo.title}</h2>
                              <p style={{ textDecoration: todo.completed ? 'line-through solid rgb(214, 87, 214)' : 'none' }}>Description: {todo.description}</p>
                              <button onClick={() => handleToggleCompleted(index)}>{todo.completed ? 'Mark as Unfinished' : 'Mark as Completed'}</button>
                              <button onClick={() => handleEditTodo(index)}>Edit</button>
                              <button className='delete' onClick={() => handleDeleteTodo(index)}>Delete</button>
                         </li>
                    ))}
               </ol>
          </div>
     );
}

export default TodoApp;