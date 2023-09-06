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
    </div>
  )
}

export default App
