import { useState, useEffect } from 'react'
import React from 'react'

const App = () => {

  const [todo, setTodo] = useState("")
  // mentos method to grab data from localstorage
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  const [edit, setEdit] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [editedValue, setEditedValue] = useState("")
  const [editable, setEditable] = useState(false)
  
  const addTodo = (data) => {
    // logic to add todo
    if (!todo.trim()) {
      alert('Please enter a valid todo.')
      return;
    }
    const todoObj = {
      id: Math.floor(Math.random() * 1000),
      text: data
    }
    setTodos([...todos, todoObj])
    localStorage.setItem('todos', JSON.stringify([...todos, todoObj]))
    setTodo("")
  }
  
  const deleteTodo = (id) => {
    // logic to delete todo
    alert('Are you sure you want to delete this todo?')
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const updateTodo = (id, data) => {
    // logic to update todo
    const updatedTodo = todos.map((todo) => todo.id === id ? {...todo, text: data} : todo)
    setTodos(updatedTodo);
    localStorage.setItem('todos', JSON.stringify(updatedTodo));
    setEditable(false)
  }

  // normal method to grab data from localstorage
  // useEffect(() => {
  //   const data = localStorage.getItem('todos')  
  //   setTodos(JSON.parse(data));  
  // }) 

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex justify-center items-center gap-4'>
        <input type="text" name="" id="search" placeholder='Enter your todo' className='bg-gray-100 px-3 py-3 w-[50vw] rounded-xl text-xl outline-none text-center text-gray-500 hover:bg-gray-200' value={todo} onChange={(e) => {
          setTodo(e.target.value)          
        }}/>
        <button className='px-5 py-3 bg-violet-500 font-bold rounded-xl text-white' onClick={() => addTodo(todo)}>Add ToDo</button>
      </div>
      <div>
        {
          todos.map(({id, text}) => {
            return <div key={id} className='flex gap-2 w-[60vw] rounded-md mb-3 mt-5 items-center px-3 py-2 bg-gray-100 font-semibold justify-between'>
              <div className='flex items-center gap-2'> 
              <input type="checkbox" name="" id="" onClick={() => deleteTodo(id)}/>
              <p className='capitalize' contentEditable={selectedTodo == id ? true : false} onInput={(e) => setEditedValue(e.target.innerText)} >
                {text}
              </p>
              </div>
              <button className='py-[6px] px-2 text-violet-600' onClick={() => {
                if (selectedTodo == id && editable == true) {
                  updateTodo(id, editedValue)
                }
                else {
                  setSelectedTodo(id)
                  setEditable(true)
                }               
              }}>{selectedTodo == id && editable == true? "Update" : "Edit"}</button>
            </div>
          })
        }
      </div>
    </div>
    </>
  )
}

export default App