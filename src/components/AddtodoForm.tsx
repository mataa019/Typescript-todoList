function AddTodoList (){
    return(
        <div className="add-todo-form">
            <h2>Add Todo</h2>
            <form className=" flex">
                <input type="text" placeholder="Enter todo" 
                 className="rounded-s-md grow border border-gray-400 p-2"
                />
                <button 
                 type="submit"
                 className=" w-16 rounded -e-md bg-slate-900 text-white font-bold p-2 hover:bg-slate-800">
                    Add</button>
            </form>
            
        </div>
    )
}
 export default AddTodoList;