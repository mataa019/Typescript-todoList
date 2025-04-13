import { TodoModel } from "../model/todoModel";

interface TodoItemProps {
    todo: TodoModel;
}
 
 function TodoItem( {todo}: TodoItemProps) {
     return(
        <>
            <div>
               <label className=" flex items-center gap-2">
                  <input type="checkbox" className="scale-125"/>
                  <span className={todo.completed ? "line-through text-gray-400": " "}> {todo.title}</span>
               </label>
            </div>
        </>
     )
    
}
export default TodoItem;