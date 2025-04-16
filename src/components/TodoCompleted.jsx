import React, { useCallback, useEffect, useState } from 'react'
import { useTodo } from '../contexts'
import Gif from '../Icons/video.gif'

function TodoCompleted({count,totalCount}) {
    const {todos} = useTodo()
    console.log("Todos:",todos)
    console.log("Count:",count)
    console.log("Total Count:",totalCount)


    return (
    <div className='w-full max-w-md md:w-2/3 lg:w-2/5 h-auto p-4 border rounded-xl border-x-2 flex flex-col md:flex-row  justify-between items-center gap-1' >

                <div className='flex items-center gap-2'>
                    <h1 className='text-xl md:text-2xl text-white font-bold  '> Completed </h1>
                    <img src="\src\Icons\Screenshot_2025-01-28_203530-removebg-preview.png" alt="" width="60px"/>
                </div>
                
                {count === totalCount && todos.length > 0 ?  <img src={Gif} alt="loading.." className='w-24' /> : ""}

                <div className='w-20 h-20 bg-green-500 rounded-full  text-2xl flex justify-center items-center text-white'>
                   {count}/{totalCount}
                </div>
                
           </div>
           
  )
}

export default TodoCompleted
