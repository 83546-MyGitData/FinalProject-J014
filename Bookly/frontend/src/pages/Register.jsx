import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import Navbar from '../components/navbar';

export function Register(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    //to get navigation hook
    const navigate = useNavigate()

    const onRegister = () => {
        if(firstName.length==0){
            toast.error("Please Enter First Name");
        }else if(lastName==0){
            toast.error('Please Enter Last Name');
        }else if(email==0){
            toast.error('Please Enter Email');
        }else if(password==0){
            toast.error('Please Enter Password');
        }else if(confirmPassword==0){
            toast.error('Please Confirm the Password');
        }else if(password!=confirmPassword){
            toast.error('Password does not match');
        }else{
            //call register api,check status
            //if success go to login screen
            toast.success('Successfully Registered');
            navigate('/signin')
        }
    }

    return (
        <div className='container'>
         <Navbar/>
         <h1 className='title'>Register</h1>
         <div className="row">
             <div className="col-3"></div>
             
             <div className="col">
             
             <div className='form'>
                 <div className='mb-3'>
                 <label htmlFor=''>First Name</label>
                 <input 
                 onChange={(e)=> setFirstName(e.target.value)}
                 type='text'
                 placeholder='Tony'
                 className='form-control' 
                 />
             </div>
             <div className='mb-3'>
                 <label htmlFor=''>Last Name</label>
                 <input 
                 onChange={(e)=> setLastName(e.target.value)}
                 type='text'
                 placeholder='Stark'
                 className='form-control' 
                 />
             </div>
             <div className='mb-3'>
                <label htmlFor=''>Email:</label>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                type='email'
                placeholder='abc@gmail.com'
                className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Password:</label>
                <input 
                onChange={(e)=> setPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxxxx'
                className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label htmlFor=''>Re-enter Password:</label>
                <input 
                onChange={(e)=> setConfirmPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxxxx'
                className='form-control' 
                />
            </div>
            <div class="form-check">
                <input 
                class="form-check-input" 
                type="checkbox" id="autoSizingCheck"/>
                <label class="form-check-label" for="autoSizingCheck">
                    Remember me
            </label>
    </div>
            <div className="mb-3">
                <button onClick={onRegister} className="w-100 btn btn-primary mt-2 ">Register</button>
                <center><div>Already have an account? <Link to={'/'}>Login here</Link></div></center>
            </div>
             </div>
            
             </div> 
             <div className="col-3"></div>
         
         
 <div></div>
         </div>  
         </div>
         
     )
}

export default Register