import './App.css';
import { useState } from "react";
// import feedback from './components/feedback';
function App(props) {

  const [notes,setNotes] = useState(props.notes)
  const [newNote,setNewNote] = useState('')
  const [showAll, setShowAll]= useState(true)

const notesToShow = showAll 
? notes
: notes.filter(n=> n.important === true)  

  const handleChange = (event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  const handleAdd = (event)=>{
    event.preventDefault()
    console.log(event.target)

    const note = {
      id:notes.length+1,
      content:newNote,
      date: new Date().toISOString(),
      important: Math.random()<0.5,
    }
    if(newNote !== "") setNotes(notes.concat(note))
    
    setNewNote('')
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
    <button onClick={()=> setShowAll(!showAll)}>Show All </button>

    <ul>
    {notesToShow.map(note => 
    <li key={note.id}>{note.content} <p>{note.date}</p></li>
    
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