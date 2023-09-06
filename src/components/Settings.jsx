
import { useState } from "react"
import Post from "./Post"

export default function Settings(props){
    const iconStyle = {
        "fontSize":"25px"
    }
    const [isShown, setIsShown] = useState(false)
    function show() {setIsShown(true)}
    function hide() {setIsShown(false)}

    const modalStyle = {
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "position": "fixed",
        "display": isShown? "flex": "none",
        "flexDirection": "column",
        "alignItems": "center",
        'justifyContent': 'flex-start',
        'zIndex': '2',
        'margin': '0',
        'width': '100%',
        'height': '100%',
        'overflow': 'hidden',
        'top': '0',
        'left': '0',
    
    }

    const {user, setUser} = props
    const defaultUser = {
        userName:"Flou Ainan",
        userID:"@flouainan",
        userImage:"https://github.com/flou-ainan.png"
    }
    function handleChange(event){
        const {name, value} = event.target
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }

    return(
        <>
        <span 
            onClick={show}
            style={iconStyle}
        >
            🟰
        </span>

        <div 
            className="settings"
            style={modalStyle}
            >
                <div 
                    className="settings--body"
                    >
                    <span className="settings--close-button"
                        onClick={hide}
                    >
                        X
                    </span>
                    <span className="settings--header">Post Example</span>
                    <Post 
                        user={{
                            userName:user.userName? user.userName:defaultUser.userName,
                            userID:user.userID? user.userID: defaultUser.userID,
                            userImage:user.userImage? user.userImage: defaultUser.userImage,
                        }}
                        content="I'm posting some content here"
                    />
                    <span className="settings--header">User Settings</span>
                    <form className="settings--form">
                        <label htmlFor="userName">User name</label>
                        <input 
                            id="userName"
                            type="text"
                            placeholder="Flou Ainan"
                            name="userName"
                            onChange={handleChange}
                            value={user.userName}
                        />
                        <label htmlFor="userID">User ID</label>
                        <input
                            id="userID" 
                            type="text"
                            placeholder="@FlouAinan"
                            name="userID"
                            onChange={handleChange}
                            value={user.userID}
                        />
                        <label htmlFor="userImage">Profile Picture URL</label>
                        <input
                            id="userImage" 
                            type="text"
                            placeholder="https://github.com/flou-ainan.png"
                            name="userImage"
                            onChange={handleChange}
                            value={user.userImage}
                        /><br></br>
                        <input
                            className="button"
                            type="button"
                            value="SET USER"
                            onClick={hide}
                        />
                    </form>
                </div>
                
            </div>
        </>
    )
}