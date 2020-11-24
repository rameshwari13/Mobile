import React from 'react'

import {Link} from 'react-router-dom'
              


       export default function Login() {
        return (
          <div>
            <nav class="navbar navbar-light bg-warning">
                <span class="navbar-brand mb-0 h1">Mobile's World</span>
            </nav>
            <h1>Log In</h1>
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" required
                />
               
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" required
                    />
                </div>
               
                {/*<button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
                </button>
                <Link to="/show"></Link>*/}
                <Link to="/Show"><button type="submit" class="btn btn-dark">Login</button></Link>
            </form>
        </div>
        </div>

    )
}

