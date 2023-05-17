import React from 'react'
import './App.css'
import Footer from './components/footer'
import Results from './pages/Results'
import Login from "./pages/Login"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route exact path='/Results' element={<Results />}/>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />

      </Routes>
      <Footer/>
    </Router>
    </div>
  );
};

export default App