import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Footer from '../components/footer';

const SearchPage = () => {
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
    } 
    catch (error) {
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
        <h1 className='brand' onClick={() => navigate("/")}>Compare Mate</h1>
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
  background-color: #002B5B;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23002B5B' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23012958' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23022754' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23022551' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2303234d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2303224a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23042047' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23041e43' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23041c40' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23041a3d' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23041939' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23041736' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23041533' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23041330' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2304112d' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23040e2a' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23030b27' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23020824' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
  padding-top: 8%;
}

.brand{
  color:aliceblue;
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