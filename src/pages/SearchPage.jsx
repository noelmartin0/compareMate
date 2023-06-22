import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Footer from '../components/footer';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      searchProducts(keyword);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        if (keyword.trim() !== '') {
            searchProducts(keyword);
          }
    }
  }

  const searchProducts = async (keyword) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword }),
      });

      if (response.ok) {
        const products = await response.json();
        navigate('/Results', { state: { products } });
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SPAGE>
    <div className='main'>
      <div className='header'>
      </div>
      <div className="parent-container">
      <div className='container'>
        <h1 className='brand'>Compare Mate</h1>
        <div className="searchbar nav__item">
            <input type="text" 
            value={keyword} 
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} 
            placeholder="Search here"/>
            <button  onClick={handleSearch}><i className="fa fa-search fa-xs"></i></button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    </SPAGE>
  );
}

const SPAGE = styled.section`
.main{
  height: 100vh;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #f1f1f1 40px ), repeating-linear-gradient( #c9ece855, #c9ece8 );
  padding-top: 8%;
}
.container{
  
  text-align:center;
  margin-bottom: 21.8%;
 }

 .brand{
  font-size: 5.3rem;
  line-height: 2;
 }

.searchbar{
    position: relative;
    top: 25%;
    left: 300px;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 600px;
    height: 30px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 10px;
}
.searchbar.nav__item{
  margin-left:auto;
  margin-right:auto;
}
input{
    position: absolute;
    top: 0;
    bottom:3;
    margin-top:-6px;
    left: 0;
    width: 100%;;
    height: 22.5px;
    line-height: 15px;
    outline: 0;
    border: 0px solid;
    display: block;
    font-size: 1em;
    border-radius: 20px;
    padding: 20px 20px;
    box-shadow: 0.9px 1px 7px rgb(166,164 ,164);
}

.fa{
    box-sizing: border-box;
    padding: 3px;
    width: 29px;
    height: 25px;
    position: absolute;
    top: 2px;
    right: 6px;
    border-radius: 100%;
    color: #002b5b;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

.searchbar:hover .fa{
    background: #002b5b;
    color: white;
}

button{
       border: none;
   background:none;
}


`;

export default SearchPage;