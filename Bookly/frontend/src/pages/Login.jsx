import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/navbar';

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onLogin = () => {
        if(email.length==0){
            toast.error('Please Enter The Email');
        }else if(password.length==0){
            toast.error('Please Enter Password');
        }else{
            //call api
            toast.success('Login Successful');
            navigate('/home');
            
        }
    }

    return (
       <div className='container'>
        <Navbar/>
        <h1 className='title'>Login</h1>

        <div className="row">
            <div className="col-3"></div>
            
        <div className="col">
            
        <div className='form'>
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

            <div className="mb-3">
                <div>Don't have an account? <Link to={'/register'}>Register here</Link></div>
                <button 
                onClick={onLogin} 
                className="btn btn-primary mt-2">Login</button>
            </div>
        </div>
           
        </div> 
            <div className="col-3"></div>
        </div>  
        </div>
        
    )
}

export default Login