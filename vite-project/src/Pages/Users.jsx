import React, { useState } from "react";

import axios from "axios"

export const Users = ()=>{
const [users,setUsers] = useState([])
   React.useEffect(()=>{
     axios.get("http://localhost:3001/users").then(function(res){
         console.log(res.data)
         setUsers(res.data)
     })
   },[])


//    const getdata = ()=>{

//    }

   return(
    <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Date of Birth</th>
        <th>State</th>
        <th>Address</th>
        <th>Pincode</th>
        </tr>
        </thead>

        <tbody>
            {users.map((users)=>(
                 <tr>
                     <td>{users.name}</td>
                     <td>{users.age}</td>
                     <td>{users.Dob}</td>
                     <td>{users.State}</td>
                     <td>{users.address}</td>
                     <td>{users.pincode}</td>
                 </tr>
            ))}
        </tbody>

    </table>
    
   )



}