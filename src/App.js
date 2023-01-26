import './App.css';
import { useEffect, useState } from "react";

import Note from './components/Note';
import noteServices from './services/noteServices';

// import feedback from './components/feedback';
function App() {

  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll, setShowAll]= useState(true)


  useEffect(()=>{
    noteServices.getAllNotes()
    .then(response=> {
      setNotes(response.data)
      console.log(response.data )

    })
    .catch(err => console.log(err))


  },[])
const notesToShow = showAll 
? notes
: notes.filter(n=> n.important === true)  

  const handleChange = (event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleUpdate = (id)=> {
    alert(id)
    let targetNote = notes.find(n=> n.id === id)
    console.log(targetNote)
    
    targetNote = {...targetNote, important:!targetNote.important}

    noteServices.changeImportant(id,targetNote)
    .then(response=>{
      console.log(response.data)
      setNotes(notes.map(n=> n.id === id ? response.date : n))
     
    }).catch(err=> console.log(err))

  }


  const handleAdd = (event)=>{
    event.preventDefault()
    console.log(event.target)

    const note = {
      // id:notes.length+1,
      content:newNote,
      date: new Date().toISOString(),
      important: Math.random()<0.5,
    }
    if(newNote !== "") {
      // axios.post('http://localhost:3001/notes', note)
      noteServices.createNote(note)
      .then(response=> {
        console.log(response)
setNotes(notes.concat(response.data))
    setNewNote('')
      }).catch(err=> console.log(err))
    }
  }

  // const handleDelete = (id)=> {
  //   axios.delete(`http://localhost:3001/notes/${id}`)
  //   .then(
  //     response => {console.log(response)
      // setNotes(notes.filter(n => n.id !== id))
  //     }
  //   ).catch(err => console.log(err))
  // }

  const handleDelete = async(id) =>  {

    try{
    if(window.confirm(`Are you sure want delete?${id}`)){
      console.log(id)
      await noteServices.deleteNote(id)
      setNotes(notes.filter(n => n.id !== id))
    }
    
    }catch(err){
      console.log(err)
    }
  }

 
  // // const{name,age}=props
  // const [counter, setCounter]= useState(0)
  // // setTimeout(
  // //   ()=> setCounter(counter +1),
  // //   1000)

  // const handleClick=()=> setCounter(counter +1)
  // // function handleClick(){
  // //   return setCounter(counter +1)
  // // }
  // const handleReset=()=> setCounter(0)
  
  // console.log(`rendering ${counter}`)

  // return (
  //   <>
  // {/* <h1>Hello {name}, You are {age} years old.</h1> */} 
  //   <h2>{counter}</h2>
  //   <button onClick={handleClick}>Plus</button>
  //   <button onClick={handleReset}>Reset</button>
    

  //   <Feedback>
      
  //   </Feedback>

  //   </>
  // );
  return(
    <>
    <h2>Notes </h2>
    <button onClick={()=> setShowAll(!showAll)}>{showAll ? 'show important':'show all'} </button>

    <ul>
    {notesToShow.map(note => 
  <Note 
  key={note.id} 
  note={note} 
  handleDelete={()=>handleDelete(note.id)}
  handleUpdate={()=>handleUpdate(note.id)}
  />
    
    )}

    </ul>

    <form>
      <input value={newNote} onChange={handleChange}/>
      <button onClick={handleAdd}>Add</button>
    </form>
    </>
  )
}

export default App;