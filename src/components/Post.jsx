export default function Post(props){

    let userName = "Flou Ainan"
    let userId = "@FlouAinan"
    return(
        <div className="post">
            <img className="profile-pic" src={props.profilePicURL}></img>
            <div className="post-body">
                <div className="user-info">
                    <span className="username"><b>{userName}</b></span>
                    <span className="userid">{userId}</span>
                </div>
                <span className="post-content">{props.content}</span>
            </div>
        </div>
    )
}