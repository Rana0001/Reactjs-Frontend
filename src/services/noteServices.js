import axios from "axios";
const baseURL = "http://localhost:3001/notes"

const getAllNotes = ()=> {
    return axios.get(baseURL)
}

const createNote = (newNote)=> {
    return axios.post(baseURL, newNote)
}

const deleteNote = (id)=> {
    return axios.delete(`${baseURL}/${id}`)
}

const changeImportant=(id, changedNote)=>{
    return axios.put(`${baseURL}/${id}`,changedNote)
}

export default{
    getAllNotes,
    createNote,
    deleteNote,
    changeImportant

}