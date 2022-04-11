import React from "react"
import { RegisterContext } from "../Context/RegisterContext"
import { Navigate } from "react-router-dom"
export const Form2 = ()=>{
    const {dispatch,State,address,pincode,name,age,Dob,handelSubmit} = React.useContext(RegisterContext)

    if(!name || !age || !Dob){
        return <Navigate to={"/register/one"}></Navigate>
    }
    return(
        <div> 

            <input type="text" placeholder="Enter state" value={State} onChange={(e)=>{dispatch({type:"Change_State",payload:e.target.value})}}/>
<br />
            <input type="text" placeholder="Enter address" value={address} onChange={(e)=>{dispatch({type:"Change_Address",payload:e.target.value})}}/>

            <br />
            <input type="text" placeholder="Enter pin code" value={pincode} onChange={(e)=>{dispatch({type:"Change_Pincode",payload:e.target.value})}}/>
<br />
            <button
            disabled={!State || !address || !pincode || !name || !age || !Dob} 
            onClick={handelSubmit}>Submit</button>
          
        </div>
    )
}