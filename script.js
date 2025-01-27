import { useEffect } from "react";

let  todos = [{id:1,todo:"Payal",isCompleted:false}]
console.log(todos);

let todo = {id:3,todo:"kiran",isCompleted:true}
todos = [...todos,{id:2,...todo}]
console.log(todos);

const deleteTodo = (id)=> {
   todos =  todos.filter((e)=> e.id !== id)
}
//deleteTodo(1)
console.log(todos);

const editTodo =(id , todo) => {
    todos = todos.map((eachTodo) => eachTodo.id === id ? todo : eachTodo)

}
editTodo( 3 , {id:4,todo:"dimple",isCompleted:false} )
console.log(todos);

const toggleCompleted = (id)=> {
      todos = todos.map((eachTodo)=> 
        (eachTodo.id === id ? {...eachTodo,isCompleted:!eachTodo.isCompleted} : eachTodo) )

        // if(eachTodo.id === id){
        //        eachTodo.isCompleted = !eachTodo.isCompleted
        //        return eachTodo
        // }
        // else{
        //      return eachTodo
        // }
      
}
toggleCompleted(4)
console.log(todos);

const howMuchCompleted= (initialCount)=> {
    //  let count = 0 ;
     todos.map((eachTodo)=> eachTodo.isCompleted ? initialCount++ : initialCount )
     return initialCount
}
console.log(howMuchCompleted(0))

let arr = [1,2 ,3 ,4, 5, 6]
arr = arr.filter((e)=> e>3  )   // array me se usko hi dega jo 3 se bada hai 
console.log(arr);


 















