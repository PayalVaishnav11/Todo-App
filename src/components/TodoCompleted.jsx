import React, { useCallback, useEffect, useState } from 'react'
import { useTodo } from '../contexts'
import Gif from '../Icons/video.gif'

function TodoCompleted({count,totalCount}) {
    const {todos} = useTodo()
    console.log("Todos:",todos)
    console.log("Count:",count)
    console.log("Total Count:",totalCount)


    return (
    <div className='w-2/5 h-24 border rounded-xl border-x-2 flex justify-between items-center
                         px-5 '
        
                         >

                <div className='flex  space-y-4 font-bold    justify-between items-center'>
                    <h1 className='text-2xl text-white  '> Completed </h1>
                    <img src="\src\Icons\Screenshot_2025-01-28_203530-removebg-preview.png" alt="" width="79px"/>
                </div>
                
                {count === totalCount && todos.length > 0 ?  <img src={Gif} alt="loading.." width="110px" /> : ""}

                <div className='w-20 h-20 bg-green-500 rounded-full text-3xl flex justify-center items-center text-white'>
                   {count}/{totalCount}
                </div>
                
           </div>
           
  )
}

export default TodoCompleted
