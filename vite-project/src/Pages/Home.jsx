
import { Form1 } from "./Form1"
import { useNavigate } from "react-router-dom"
export const Home = ()=>{

const Mynavigate = useNavigate()
    return(

        <div>
            {/* <h1>Add Users</h1> */}

            <button onClick={()=>Mynavigate(`/users`)} >Show all users</button>
            
        </div>
    )
}