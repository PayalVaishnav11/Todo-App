import { useContext,createContext } from "react";

export const TodoContext = createContext({
       todos: [  ],
       addTodo:(todo)=>{},
       deleteTodo:(id)=> {},
       editTodo:(id , todo)=>{},
       toggleCompleted:(id)=> {},
       howMuchCompleted:()=> {},
       totalTodoCount:()=>{}
})
export const   useTodo = ()=> {
    return useContext(TodoContext)
}

 export const TodoContextProvider = TodoContext.Provider

 
