function AddTodoList (){
    return(
        <div className="add-todo-form">
            <h2>Add Todo</h2>
            <form>
                <input type="text" placeholder="Enter todo" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
 export default AddTodoList;