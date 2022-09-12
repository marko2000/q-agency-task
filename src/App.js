import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from "./components/Header";
import Posts from './components/Posts';
import Post from './components/Post';
import './App.css'

const App = () => {
  const message = "Hello from "

  return (
      <div className="App">
        <Router>
          <Header message={message} />
          <Routes>
            <Route path='/' element={<Navigate replace to='/posts' />} />
            <Route path='/posts' element={<Posts message={message} />} />
            <Route path='/posts/:postId' element={<Post message={message} />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;