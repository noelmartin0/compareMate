import React from 'react'
import Login from "./pages/Login"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App