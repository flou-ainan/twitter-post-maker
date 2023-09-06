import Post from "./Post"
export default function PostsList(props){
    const {posts} = props

    let postsList = posts.map(post => 
        (
            <Post 
                key={post.id}
                user={post.user}
                content={post.content}

                />
        ))
    return(
            <div className="posts-list">
                {postsList}
            </div>
        )
}