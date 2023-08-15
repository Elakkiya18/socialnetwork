import "./navbar.scss"
import homeIcon from '../icons/home-4-svgrepo-com.svg'
import gridIcon from '../icons/view-grid-svgrepo-com.svg'
import searchBar from '../icons/search-alt-1-svgrepo-com.svg'
import email from '../icons/mail-svgrepo-com.svg'
import notification from '../icons/notification-12-svgrepo-com.svg'
import person from '../icons/person-svgrepo-com.svg'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
//import { AuthContext } from "./AuthContextProvider";
//import currentUser from "../context/authContext/AuthContextProvider"


const NavBar = () =>{
   const {currentUser} = useContext(AuthContext);
    
    return(
        <div className="navBar">
           
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                 <span>Social Network</span>
                 </Link>
                 <img src={homeIcon} alt="homeIcon" className="homeIcon" />
                 <img src={gridIcon} alt="gridIcon" className="gridIcon"/>
                 
                 <div className="search">
                    <img src={searchBar} alt="searchBar" className="searchBar" />
                    <input type="text" placeholder="Search..." />
                 </div> 
                 
            </div>
            <div className="right">
            <img src={person} alt="person" className="person" />
                <img src={email} alt="email" className="email"/>
                <img src={notification} alt="notification" className="notification" />
                
                <div className="user">
               
                   <img src={currentUser.profilePic} alt="Profile" />
                   <span>{currentUser.name}</span>
               
                </div>
            </div>

        </div>
    );
};

export default NavBar