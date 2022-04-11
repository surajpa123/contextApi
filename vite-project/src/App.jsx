import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Home} from "./Pages/Home"
import {Routes,Route} from "react-router-dom"
import { Form1 } from './Pages/Form1'
import { Form2 } from './Pages/Form2'
import { Users } from './Pages/Users'
import { Notfound } from './Pages/Notfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/register/one' element={<Form1/>}></Route>
<Route path='/register/two' element={<Form2/>}></Route>
<Route path='/users' element={<Users/>}></Route>
<Route path='*' element={<Notfound/>}></Route>

      </Routes>

    </div>
  )
}
export default App
