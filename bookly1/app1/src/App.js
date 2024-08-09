import {Route,Routes} from "react-router-dom"
import Login from './screens/Login'
import Register  from './screens/Register'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className='Container'>
      <Routes>
        <Route path='' element={<Login/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
