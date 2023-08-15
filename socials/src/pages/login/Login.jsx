import { Link, useNavigate } from "react-router-dom"
import "./login.scss"
import { useContext } from "react"
import { AuthContext } from "../../components/context/authContext"
import { useState } from "react";
//import axios from "axios";

const Login = () => {

  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  });
  
  const [err,setErr] = useState(null);  
  
  const navigate = useNavigate();


const handleChange = (e) =>{
  setInputs((prev) =>({...prev,[e.target.name]:e.target.value }));
};

  const {login} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
   try{
    const response = await login(inputs);
      
      // Check if the response is an object before stringifying
      if (typeof response === 'object') {
        const responseDataAsString = JSON.stringify(response); // Convert the response to a string
        console.log('Login response as string:', responseDataAsString);
      }

      navigate("/");
    
   } catch(err){
      setErr(err.response.data);
   }
  };
    
  return(
        <div className="login">
           <div className="card">
             <div className="left">
               <h1>Welcome </h1>
                      to
                <h1>social network</h1>
               <span>Don't have an account?</span>
               <Link to="/register">
               <button>Register</button>
               </Link>
             </div>
             <div className="right">
              <h1>Login</h1>
              <form>
                <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                {err && err}
                <button onClick= {handleLogin} > Login</button>
              </form>

             </div>
            </div> 
        </div>
    )
}

export default Login