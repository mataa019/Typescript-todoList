import TodoItem from "./components/todoItem"
import { dummyTodos } from "./data/todo"

function App() {

  function setTodocompleted(id: number, completed: boolean) {
          alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`);
  }
  return (
    <main className="py-8  h-screen space-y-5">
      <h1 className="text-4xl text-center font-bold">
        Todo List
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
         <div className="space-y-4 ">
            {dummyTodos.map((todo) => (
              <TodoItem 
                todo={todo}
                key={todo.id}
               onCompletedChange={setTodocompleted}
              />
            ))}
         </div>
      </div>
    </main>
  )
}

export default App
