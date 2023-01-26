const Note = (props) => {
    const {note, handleDelete,handleUpdate} = props
    return(
        <li>{note.content} <p>{note.date}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>{note.important? 'Set Important': "Set Not Important"}</button>

        </li>
    )
}   

export default Note