import "./rightBar.scss"

const RightBar = () =>{
    return(
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5eMRxkFIQMnfAe5p_L-BJUdf6xv6CvD0zw&usqp=CAU" alt="user1" />
                            <span>Joe</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user1" />
                            <span>John</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span> 
                        Latest Activities
                        </span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5eMRxkFIQMnfAe5p_L-BJUdf6xv6CvD0zw&usqp=CAU" alt="user1" />
                            <p>
                                <span>Joe</span> Changed their cover picture
                            </p>
                        </div>
                        <span>10 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user1" />
                            <p>
                                <span>John</span> Liked a post
                            </p>
                        </div>
                        <span>40 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5eMRxkFIQMnfAe5p_L-BJUdf6xv6CvD0zw&usqp=CAU" alt="user1" />
                            <p>
                                <span>Joe</span> Liked a comment
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user1" />
                            <p>
                                <span>John</span> Posted
                            </p>
                        </div>
                        <span>30 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5eMRxkFIQMnfAe5p_L-BJUdf6xv6CvD0zw&usqp=CAU" alt="user1" />
                            <div className="online"  />
                                <span>Joe</span>
                        </div>  
                    </div>  
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user1" />
                            <div className="online"  />
                                <span>John</span>
                        </div>  
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default RightBar