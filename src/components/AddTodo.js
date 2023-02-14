function AddTodo({submitHandle,onChange,todo}){

    return(
        <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={onChange}/>
        <button disabled={!todo} type="submit" >Ekle</button>
    </form>)
}
export default AddTodo
