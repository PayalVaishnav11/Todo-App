import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
  const [todo,setTodo] = useState("")
  const {addTodo} = useTodo()
  const add= (e)=>{
        e.preventDefault()
        addTodo({todo:todo , isCompleted:false})
        setTodo('')
  }

  return (
    <form className='h-11 w-3/5 bg-slate-200 rounded-lg flex justify-between '
          onSubmit={add}
    > 
    <input 
    className='px-3 w-full outline-none rounded-l-lg text-xl'
    type="text"
    placeholder='Write todo...'
    value={todo}
    onChange={(e)=> setTodo(e.target.value)}
     />
    <button 
    type='submit'
    className='w-20 h-full bg-green-500 rounded-r-lg text-white font-bold text-xl hover:bg-green-700 transition-all duration-500'>
      Add
    </button>
  
   </form>
  )
}

export default TodoForm
