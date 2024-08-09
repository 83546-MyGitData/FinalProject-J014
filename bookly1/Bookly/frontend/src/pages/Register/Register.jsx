import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import Navbar from '../../components/Navbar/navbar';
import { register } from '../../services/admin';
import './Register.css';

export function Register(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    //to get navigation hook
    const navigate = useNavigate()

    const onRegister = async () => {
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
            const result = await register(firstName,lastName,email,password)
            //if success go to login screen
            if(result['status']=='success'){
            toast.success('Successfully Registered');
            navigate('/')
            }else{
                toast.error(result['error'])
            }
        }
    }

    return (
        <div className='container-fluid'>
         <Navbar/>
         <div className='container_body'>
         <center>
         <div className='registration-body'>
          
             <div className='form'>
             <h1 className='title'>Register here</h1>
                 <div className='input-box mb-3'>
                 <input 
                 onChange={(e)=> setFirstName(e.target.value)}
                 type='text'
                 placeholder='First Name'
                 />
             </div>

             <div className='input-box mb-3'>
                 <input 
                 onChange={(e)=> setLastName(e.target.value)}
                 type='text'
                 placeholder='Last Name'
                 />
             </div>

             <div className='input-box mb-3'>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                type='email'
                placeholder='email@email.com'
                />
            </div>
            <div className='input-box mb-3'>
                <input 
                onChange={(e)=> setPassword(e.target.value)}
                type='password'
                placeholder='Password'
                />
            </div>
            <div className='input-box mb-3'>
                <input 
                onChange={(e)=> setConfirmPassword(e.target.value)}
                type='password'
                placeholder='Re-enter Password'
                />
            </div>

            <div>
            <div className="row">
                <div className="col">
                    <h6>Role: </h6>
                </div>
            
                    <div className="col">
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">Seller</label>
                    </div>
                    
                    <div className="col">
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Buyer</label>
                    </div>
            </div>
            </div>


            <div class="mb-3">
                <input 
                className="form-check-input" 
                type="checkbox" id="autoSizingCheck"/>
                <label class="form-check-label" for="autoSizingCheck">
                    Remember me
            </label>
            
            <button onClick={onRegister} className="w-100 btn btn-primary mt-2 ">Register</button>
            <center><div>Already have an account? <Link to={'/'}>Login here</Link></div></center>  
            </div>

         </div>  
         </div>
         </center>
         </div>
         </div>
         
     )
}

export default Register