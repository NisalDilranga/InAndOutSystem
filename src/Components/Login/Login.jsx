import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
        <div className="body1">
    <div class="container">
        <div class="circle-content">LOGIN</div>
        <div class="card-content">
          <div class="login-box">

            <form>
                  <div class="user-box">
                    <input type="text" name="" required=""></input>
                    <label>Username</label>
                 </div>
                 <div class="user-box">
                    <input type="password" name="" required=""></input>
                    <label>Password</label>
                </div>
                <center>
                  <Link to='/MainDashBord' >
               
                      SEND
                     <span></span>
                   
                  </Link>
                  
                </center>
           </form>
        </div>
    </div>
</div>
</div>
        </>
    );
}

export default Login;
