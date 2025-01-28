import React, { useEffect, useState } from 'react'
import { useTodo } from '../contexts'
import { use } from 'react'
// import editImg from "C:\Users\Payal\WebDev\ReactJs\10todoApp\src\Icons\Notes 3D Animated Icon (1).png"

function TodoList({todo}) {   // ye todo ek object hai 
  const [isTodoEditable,setIsTodoEditable] = useState(true)
  const [todoMsg,setTodoMsg] = useState(todo.todo)
  const {deleteTodo,editTodo,toggleCompleted} = useTodo()
  // const {howMuchCompleted}= useTodo()
  // let [count,setCount] = useState(0)

  const edit_Todo = ()=>{
      editTodo(todo.id ,{...todo,todo:todoMsg})
      setIsTodoEditable(false)
  }
  const toggle_Completed = ()=>{
    toggleCompleted(todo.id)
  }
  
  return (
    <>
    <div className={`w-3/4 mr-4 h-12  rounded-lg flex  justify-between items-center 
      px-6 ${todo.isCompleted ? "bg-green-400" :"bg-purple-400"} :  `}
      key={todo.id}

    >
      <div className='flex gap-3 items-center w-full'>
          <input 
          className='w-4 h-4 '
          type="checkbox"
          checked={todo.isCompleted}
          onChange={toggle_Completed }
            />

          <input
          className={` h-full w-full outline-none text-xl px-3 py-1 mr-5 bg-transparent ${isTodoEditable? "border-black/10" : "border-transparent"}  ${todo.isCompleted?"line-through":""}`} 
          type="text"
          value={todoMsg}
          onChange={(e)=> setTodoMsg(e.target.value)}
           readOnly={!isTodoEditable}
            />
      </div>
      
     </div>

     {/* buttons */}

     <div className=' flex gap-4  w-2/5 justify-end  h-12 items-center '>
        <button className={`w-24 h-11 bg-white rounded-lg relative shrink-0
               hover:bg-slate-200  `}
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
           { isTodoEditable?
              <div className=' flex justify-between px-2 gap-1 items-center text-xl  '> Save <img src = "\src\Icons\Screenshot_2025-01-28_204102-removebg-preview.png" width="36px"/></div>   :
               <div className=' flex justify-between px-2 gap-1 items-center text-xl'> Edit <img src = "\src\Icons\Notes 3D Animated Icon (1).png" width="42px"/></div>   }
        </button>

        <button className='w-22 h-11 bg-white rounded-lg shrink-0 hover:bg-slate-200'
                onClick={()=> deleteTodo(todo.id)}
         >
                <div className=' flex justify-between items-center text-xl px-1'>
                      Delete <img src='\src\Icons\Notes 3D Animated Icon (2).png' width="44px"/>
                </div>
        </button>

      </div>
     </>
  )
}

export default TodoList
