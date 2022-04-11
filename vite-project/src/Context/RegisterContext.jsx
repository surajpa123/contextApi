import React from "react";

export const RegisterContext = React.createContext();

const initState = {
    name:"",
    age:"",
    Dob:"",
    State:"",
    address:"",
    pincode:""
};

function reducer(state,action){
    switch (action.type){
        case "Change_Name":
            return {...state, name:action.payload}
            case "Change_Age":
                return {...state, age:action.payload}
           case "Change_DOB":
               return {...state, Dob:action.payload}
               case "Change_State":
                   return {...state, State:action.payload}
                   case "Change_Address":
                       return {...state, address:action.payload};
                       case "Change_Pincode":
                         return {...state,pincode:action.payload}
                       default:
                           throw new Error()
    }
}

 export function RegisterContextProvider({children}){
     const [state,dispatch] = React.useReducer(reducer,initState);
     const handelSubmit = ()=>{
        fetch(`http://localhost:3001/users`,{
            method:"POST",
            body:JSON.stringify(state),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=> res.json()) 
           .then((res)=>{
            alert("User Added Sucessfully");
           }) 
        .catch((error)=> console.log(error))
     }
     React.useEffect(()=>{
         console.log(state)
     },[state]);

     const {name,age,Dob,State,address,pincode} = state
     return (
         <RegisterContext.Provider
         value={{
             name,
             age,
             Dob,
             State,
             address,
             pincode,
             dispatch,
             handelSubmit,
         }} >{children}</RegisterContext.Provider>
     )
 }

 // created context and maintining state inside context


 

