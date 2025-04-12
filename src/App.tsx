import TodoItem from "./components/todoItem"
import { dummyTodos } from "./data/todo"

function App() {

  return (
    <main className="py-8 font-mono h-screen">
      <h1 className="text-4xl text-center">
        Mataa here 
      </h1>
      <div className="max-w-lg mx-auto ">
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
