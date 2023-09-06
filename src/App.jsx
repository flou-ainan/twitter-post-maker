import { useState } from 'react'
import PostWritter from './components/PostWritter'
import PostsList from './components/PostsList'
import './App.css'

function App() {

  const [posts, setPosts] = useState([])
  return (
    <div className='app'>
      <header className="header"><b>Flou Fake Twitter</b></header>
      <PostWritter setPosts={setPosts}/>
      <PostsList posts={posts}/>
    </div>
  )
}

export default App
