import "./leftBar.scss"
import group from '../assets/network-group-svgrepo-com.png'
import message from '../assets/message-svgrepo-com.png'
import settings from '../assets/settings-svgrepo-com.png'
import gallery from '../assets/photos-svgrepo-com.png'
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

const LeftBar = () =>{
    const {currentUser} = useContext(AuthContext)
    return(
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                      <img src={currentUser.profilePic}  />
                    < span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={group} alt="group" />
                        <span>Groups</span>
                    </div>
                    <div className="item1">
                    <img src={message} alt="message" style={{width: '30px', height:'50px',marginRight:'-8px', position: 'relative'}} />
                        <span> Message</span>
                    </div>
                    <div className="item">
                        <img src={settings} alt="settings" />
                        <span>Settings</span>
                    </div>
                    <div className="item">
                        <img src={gallery} alt="gallery" />
                        <span>Gallery</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar