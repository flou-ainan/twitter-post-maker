import {useState} from "react"
export default function PostWritter(props){
    const {setPosts} = props
    const [postContent, setPostContent] = useState("")
    
    function handleChange(event){
        const {value} = event.target
        if(value.length <= 280){
            setPostContent(value)
        }
    }

    function submit(event){
        event.preventDefault()
        // alert(postContent)
        setPosts(prevPosts =>(
            [
                {
                    id: prevPosts.length,
                    user:props.user,
                    content:postContent,
                },
                ...prevPosts
            ]
        ))
        setPostContent("")
    }
    return(
        <div className="post-writter">
            <img className="profile-pic" src={props.user.userImage}></img>
            <form className="form" onSubmit={submit}>
                <textarea 
                    className="post-body"
                    name="content"
                    placeholder="What is happening!?"
                    value={postContent}
                    onChange={handleChange}
                />
                <div className="form-bottom">
                    <span className="char-count">{postContent.length}</span>
                    <button className="post-button">Post</button>
                </div>
            </form>
        </div>
    )
}