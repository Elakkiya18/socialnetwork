import { Link, useNavigate } from "react-router-dom";
import "./register.scss"
import { useState } from "react";
import axios from "axios";



const Register = () => {

  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  });
  
  const [err,setErr] = useState(null);   
  const navigate = useNavigate();

const handleChange = (e) =>{
  setInputs((prev) =>({...prev,[e.target.name]:e.target.value }));
};

const handleClick = async (e) =>{
  e.preventDefault();

  try{
   await axios.post("http://localhost:8800/api/auth/register", inputs)
   navigate("/");
  }catch(err){
  setErr(err.response.data);
  }
 };

 console.log(err)

    return(
        <div className="register">
           <div className="card">
             <div className="left">
               <h1>Welcome</h1>
                       to
               <h1> social network</h1>
               <span>Do have an account?</span>
               <Link to="/login">
                <button>login</button>
               </Link>
             </div>
             <div className="right">
              <h1>Register</h1>
              <form>
                <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}/>

                {err && <div className="error">{err.message}</div> }
                <button onClick={handleClick}>Register</button>
              </form>

             </div>
            </div> 
        </div>
    );
};

export default Register