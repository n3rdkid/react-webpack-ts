import React ,{useState} from 'react';
import ReactDom from "react-dom";

type FormElement=React.FormEvent<HTMLFormElement>
interface Todo{
    text:string,
    complete:boolean
}
function App() : JSX.Element {
    const [value,setValue]=useState<string>("");
    const [ todos,setTodos]=useState<Todo[]>([]);
    const handleSubmit=(e:FormElement):void=>{
        e.preventDefault();
        addTodo(value)
        setValue("");
    }
    const addTodo = (text:string):void=>{
        let newTodos : Todo[] = [...todos,{text,complete:false}]
        setTodos(newTodos)
    }
    const toggleTodo = (index:number):void=>{
        let newTodos : Todo[] = [...todos];
        newTodos[index].complete=!newTodos[index].complete
        setTodos(newTodos)
    }
    const removeTodo = (index:number):void=>{
        let newTodos : Todo[] = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }
    return (
      <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit">Add Todo</button>
      </form>
      <section>
          {todos.map((todo:Todo,index:number)=><div key={index}>{index+1} - <span style={{textDecoration:todo.complete?'line-through':''}}> {todo.text}</span> <input type="checkbox" checked={todo.complete} onChange={()=>toggleTodo(index)}/><button type="button" onClick={()=>removeTodo(index)}>x</button></div>)}
      </section>
      </>
    )
}

export default App

const root= document.getElementById("app");

ReactDom.render(<App/> , root);
