export default function Post(props){

    const {userName, userID, userImage} = props.user
    const {content} = props 
    return(
        <div className="post">
            <img className="profile-pic" src={userImage}></img>
            <div className="post-body">
                <div className="user-info">
                    <span className="username"><b>{userName}</b></span>
                    <span className="userid">{userID}</span>
                </div>
                <span className="post-content">{content}</span>
            </div>
        </div>
    )
}