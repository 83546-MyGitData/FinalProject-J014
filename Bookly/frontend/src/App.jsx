import {Route, Routes} from "react-router-dom"
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route index element={<Login/>} /> 
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
