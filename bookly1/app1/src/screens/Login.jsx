import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

function Login()
{
    const [isEmailEmpty, setEmailEmpty] =useState(true)
    const [isPasswordEmpty, setPasswordEmpty] =useState(true)


    return <div>
        <h2 className="page-header">Login</h2>

        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className="form">

                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" />
                        <p style={{color: 'red'}}>Email is mandatory</p>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                        <p style={{color: 'red'}}>Password is mandatory</p>

                    </div>

                    <div className="mb-3">
                        <div>D'ont have an account ? <Link to='/register'>Register here</Link> 
                        </div>
                        <button className="btn btn-success mt-2">Login</button>
                    </div>

                </div>

            </div>
            <div className="col"></div>

        </div>
    </div>

}

export default Login





//<li key={index}>{type}</li>