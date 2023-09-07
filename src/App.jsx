import { useState } from 'react'
import PostWritter from './components/PostWritter'
import PostsList from './components/PostsList'
import Settings from './components/Settings'
import './App.css'

function App() {
  const [user, setUser] = useState(
    {
        userName:"Flou Ainan",
        userID:"@flouainan",
        userImage:"https://github.com/flou-ainan.png"
    }
  )
  const [posts, setPosts] = useState([])
  return (
    <div className='app'>
      <header className="header"><b>Flou Fake Twitter</b><Settings user={user} setUser={setUser} /></header>
      <PostWritter setPosts={setPosts} user={user}/>
      <PostsList posts={posts}/>
      <br/>
      <footer>
              <div className='footer--text'>
                Made by: <a href="https://github.com/flou-ainan">Flou Ainan</a>
                <p className='project'><a href="https://github.com/flou-ainan/twitter-post-maker/#twitter-post-maker">Access the project</a> </p>
              </div>
            </footer>
    </div>
  )
}

export default App
