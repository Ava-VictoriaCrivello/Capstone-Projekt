
import {useState} from 'react';
function ToDos(){
    const [input, setInput] =useState("")
    return(
        <div>
        <h1>ToDo Liste</h1>
        <form>
            <input placeholder="Deine Todo's"></input>
            <button>Todo Hinzufügen</button>


        </form>
        
        
        
        </div>
        
    )
 }

 export {ToDos}











