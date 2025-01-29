import { useEffect, useState } from 'react'
 import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoContextProvider } from './contexts'
import { useTodo } from './contexts'
import TodoCompleted from './components/TodoCompleted'



function App() {
    let [todos,setTodos] = useState([])
    let count = 0;

    const addTodo = (todo)=> {   //individual todo is object 
       setTodos((prevTodos) => [...prevTodos,{id:Date.now(),...todo}] )
    }
    const deleteTodo = (id) =>{
      setTodos((prevTodos) => prevTodos.filter((eachTodo)=> eachTodo.id !== id ))
    }
    const editTodo = (id,todo)=> {
      setTodos((prevTodos) =>  prevTodos.map( (eachTodo)=> eachTodo.id === id ? todo : eachTodo))
    }
    const toggleCompleted = (id)=> {
      setTodos((prevTodos)=>prevTodos.map((eachTodo)=> eachTodo.id === id ? {...eachTodo,isCompleted: !eachTodo.isCompleted} : eachTodo ))
    }

    const howMuchCompleted = (count)=> {
      todos.forEach((eachTodo)=> {
        if(eachTodo.isCompleted){
          count++
        }
      })
      return count
    }
    const totalTodoCount=()=> {
         return todos.length
    }
     useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"))
      if(todos && todos.length > 0){
            setTodos(todos)
            
      }
    },[])

     useEffect(()=> {
       
        localStorage.setItem("todos",JSON.stringify(todos))
        
     },[todos])

  return (

    < TodoContextProvider value={{todos,addTodo,deleteTodo,toggleCompleted,editTodo,howMuchCompleted,totalTodoCount}}>
              <h1 className='font-bold text-4xl text-white mt-14'>Manage Your Todos</h1>
              <div className='mx-auto flex  flex-col justify-center gap-5 items-center  py-9 '>
              
                    <TodoCompleted count={howMuchCompleted(count)} totalCount={totalTodoCount()}  />
                    <TodoForm/>
          
                    {todos.map((eachTodo)=> (
                        <div key={eachTodo.id}
                            className='w-3/5 flex  justify-between  '>
                            <TodoList todo={eachTodo} />
                          </div>
                    ))}

              </div>
  
    </TodoContextProvider>
  )
}

export default App
