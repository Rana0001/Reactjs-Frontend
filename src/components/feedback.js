import { useState } from "react";
const Button=(props) =>{
    const {handleClick, text}=props
    return(
    <button onClick={handleClick}>{text}</button>
    )
}
const Statistics=(props)=>{
    const{Good, Neutral, Bad}=props

    return(
    <>
    <p>Good{Good}</p>
    <p>Neutral{Neutral}</p>
    <p>Bad{Bad}</p>
    <p>Total: {Good+ Neutral+ Bad}</p>
    <p>Average: {(Good + Bad)/(Good+Neutral+Bad)}</p>
    </>
)
}
const Feedback =()=>{
    // const [counter, setCounter]= useState(0)
    const[Good,setGood]=useState(0)
    const[Neutral,setNeutral]= useState(0)
    const[Bad, setBad]=useState(0)
    const GoodClick=()=> setGood(Good +1)
    const NeutralClick=()=> setNeutral(Neutral +1)
    const BadClick=()=> setBad(Bad +1)
    const resetAllClick=()=>{
        setGood(0)
        setNeutral(0)
        setBad(0)
    }
    return(
        <>
        <h2>Give Feedback</h2>
        <Button handleClick={GoodClick} text={'Good'}/>
        <Button handleClick={NeutralClick} text={'Neutral'}/>
        <Button handleClick={BadClick} text={'Bad'}/>
        <Button handleClick={resetAllClick} text={'Reset All'}/>
        
        <Statistics Good= {Good} Neutral={Neutral} Bad={Bad}></Statistics>
        </>
    )
}
export default Feedback;