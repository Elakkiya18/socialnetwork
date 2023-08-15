import "./post.scss"
import likes from "../icons/heart-svgrepo-com.svg"
import commentIcon from "../icons/comment-svgrepo-com.svg"
import share from "../icons/share-svgrepo-com.svg"
import moreInfo from "../icons/three-dots-line-svgrepo-com.svg"
import Posts from "../posts/Posts"
import fullheart from "../icons/fullcoveredheart-svgrepo-com.svg"
import { Link } from "react-router-dom";
import React, { useState } from "react";

import Comments from "../comments/Comment";



const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false);

    const liked = false;
    return(
        <div className="post">
           <div className="container">
              <div className="user">
                <div className="userInfo">
                  <img src={post.profilePic} alt=""  />
                  <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}} >
                    <span className="name">{post.name}</span>
                    
                    </Link>
                    <span className="date">1 min ago</span>
                  </div>
                </div>
                <img src={moreInfo} alt="" />
             </div>
             <div className="content">
                
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
             </div>
             <div className="info">
                <div className="item" >
                {liked ? <img src={fullheart} alt="" /> : <img src={likes} alt="" /> }
                  12 Likes
                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                <img src={commentIcon} alt="" />
                  12 Comments
                </div>
                <div className="item">
                  <img src={share} alt="" />
                  Share
                </div>
             </div>
            {commentOpen && <Comments/>}
            </div>
        </div>
    );
};

export default Post;