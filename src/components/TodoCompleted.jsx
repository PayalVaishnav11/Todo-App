import React, { useCallback, useEffect, useState } from 'react'
import { useTodo } from '../contexts'

function TodoCompleted() {
    let [count, setCount] = useState(0)
    const {todos} = useTodo()

    const  {howMuchCompleted}  = useTodo()

    const how_Much_Completed = ()=> {
        const total = howMuchCompleted(count)
        console.log("Total",total)
        return total
    }
    let newCount  = how_Much_Completed()
    console.log("new",newCount)

    return (
    <div className='w-2/5 h-24 border rounded-xl border-x-2 flex justify-between items-center
                         px-5 
                '>
                <div className='flex flex-col space-y-4 font-bold justify-start '>
                    <h1 className='text-xl text-white '>Completed</h1>
                   
                </div>
                <div className='w-20 h-20 bg-green-500 rounded-full text-3xl flex justify-center items-center text-white'>
                    {newCount}
                </div>
           </div>
  )
}

export default TodoCompleted
