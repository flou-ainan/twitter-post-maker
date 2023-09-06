import Post from "./Post"
export default function PostsList(props){
    const {posts} = props

    let postsList = posts.map(post => 
        (
            <Post 
                key={post.id}
                profilePicURL={post.profilePicURL}
                content={post.content}
                />
        ))
    return(
            <div className="posts-list">
                {postsList}
            </div>
        )
}