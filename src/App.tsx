import TodoItem from "./components/todoItem"
import { dummyTodos } from "./data/todo"

function App() {

  return (
    <main className="py-8  h-screen space-y-5">
      <h1 className="text-4xl text-center font-bold">
        Todo List
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
         <div className="space-y-4 ">
            {dummyTodos.map((todo) => (
              <TodoItem todo={todo}/>
            ))}
         </div>
      </div>
    </main>
  )
}

export default App
