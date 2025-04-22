function AddTodoList (){
    return(
        <div className="add-todo-form">
            <h2>Add Todo</h2>
            <form className=" flex">
                <input type="text" placeholder="Enter todo" 
                 className="rounded-s-md grow border border-gray-400 p-2"
                />
            </form>
            <button type="submit">Add</button>
        </div>
    )
}
 export default AddTodoList;