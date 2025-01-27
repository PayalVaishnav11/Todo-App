import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoList({todo}) {   // ye todo ek object hai 
  const [isTodoEditable,setIsTodoEditable] = useState(true)
  const [todoMsg,setTodoMsg] = useState(todo.todo)
  const {deleteTodo,editTodo,toggleCompleted} = useTodo()

  const edit_Todo = ()=>{
      editTodo(todo.id ,{...todo,todo:todoMsg})
      setIsTodoEditable(false)
  }
  const toggle_Completed = ()=>{
    toggleCompleted(todo.id)
  }

  return (
    <div className={`w-full h-12  rounded-lg flex  justify-between items-center px-6 ${todo.isCompleted ? "bg-green-400" :"bg-purple-400"} `}>
      <div className='flex gap-3 items-center w-full'>
          <input 
          className='w-4 h-4 '
          type="checkbox"
          checked={todo.isCompleted}
          onChange={toggle_Completed}
            />

          <input
          className={` h-full w-full outline-none text-xl px-3 py-1 mr-5 bg-transparent ${isTodoEditable? "border-black/10" : "border-transparent"}  ${todo.isCompleted?"line-through":""}`} 
          type="text"
          value={todoMsg}
          onChange={(e)=> setTodoMsg(e.target.value)}
           readOnly={!isTodoEditable}
            />
      </div>
      <div className=' flex gap-4'>
        <button className={`w-8 h-8 bg-white rounded-lg relative shrink-0
               hover:bg-slate-200 `}
            onClick={(e)=> {
                if(todo.isCompleted) return;  //agar pehle checked hai to kuch mat karo 

                if(isTodoEditable){
                    edit_Todo()
                }
                else{
                    setIsTodoEditable((prev) => !prev)
                }
            }}
             disabled={todo.isCompleted}  // agar completed hai to disabled kr do
        >
        {isTodoEditable?"📂":"🖋️" }
         {/* <div id='save' className={`absolute bottom-8 text-xl text-white
                        ${isTodoEditable ? "block":"hidden"} 
         `}>Save</div> */}
        </button>

        <button className='w-8 h-8 bg-white rounded-lg shrink-0 hover:bg-slate-200'
                onClick={()=> deleteTodo(todo.id)}
         >
                ❌
        </button>

      </div>
     </div>
  )
}

export default TodoList
