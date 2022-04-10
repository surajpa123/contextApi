import React from "react"
import { RegisterContext } from "../Context/RegisterContext"
import { useNavigate } from "react-router-dom"
export const Form1 = ()=>{
const {name,age,Dob,dispatch} = React.useContext(RegisterContext)
const navigate = useNavigate()
return(
    <div>
<input type="text" placeholder="Enter name" value={name} onChange={(e)=>dispatch({type:"Change_Name",payload:e.target.value})}/>
<br/>
<input type="text" placeholder="Enter age" value={age} onChange={(e)=>dispatch({type:"Change_Age",payload:e.target.value})}/>
<br/>
<input type="date" placeholder="Enter dob" value={Dob} onChange={(e)=>dispatch({type:"Change_DOB",payload:e.target.value})}/>
<br/>
<button
disabled={!name && !age && !Dob}
onClick={()=>{navigate(`/register/two`)}}>Next Step</button>

    </div>












)



}