import React from 'react'
import './App.css'
import Footer from './components/footer'
import Results from './pages/Results'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from './pages/Signup'
import SearchPage from './pages/SearchPage'
import Wishlist from './pages/Wishlist'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Results' element={<Results />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/searchpage' element={<SearchPage/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App