import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart,faUser } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const[toggleIcon ,setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
        active === 'nav__menu'? setActive('nav__menu nav__active') : setActive('nav__menu');

        //TogglerIcon
        toggleIcon === 'nav__toggler'
        ? setToggleIcon('nav__toggler toggle')
        : setToggleIcon('nav__toggler');
    };

  return (
    <NAVBAR>
    <nav className="nav">
        <a href="/" className="nav__brand">CompareMate</a>
       {/* <div classname="search_box">
            <input type='search' placeholder='search here'></input>
            <span className='fa fa-search'></span>
        </div> */}
        <form className="nav__item" action="">
            <input type="search" placeholder="Search here"></input>
            <i className="fa fa-search fa-xs"></i>
        </form>
        <ul className={active}>
            {/* <li className="nav__item"><a href="#" className="nav__link">Search</a></li> */}
            <li className="nav__item"><a href="wishlist" className="nav__link"><FontAwesomeIcon className="nav-icons Logo" icon={faHeart} size="xl" /></a></li>
            {/* <li className="nav__item"><a href="#" className="nav__link">Contact</a></li> */}
            <li className="nav__item"><a href="\login" className="nav__link"><FontAwesomeIcon className="nav-icons Logo" icon={faUser} size="xl"  /></a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
    </NAVBAR>
  );
};

const NAVBAR = styled.nav`
*,
*::after,
*::before {
    margin:0;
    box-sizing: border-box;
}


html{
    font-size:62.5%;

}

body{
    font-size: 1.6rem;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
    color: #fff;
}

form{
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
    padding: 5px;
}
input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 22.5px;
    line-height: 15px;
    outline: 0;
    border: 0;
    display: block;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

.nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
    background: #002b5b;
}

.nav__brand{
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    font-family: 'Inter', sans-serif;

}

.nav__menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
}

.nav__toggler div{
    width: 3rem;
    height: 0.2rem;
    margin: 0.4rem;
    background: #fff;
    transition: 0.4s ease-in;
}
.nav__toggler{
    cursor: pointer;
    display: none;
}

@media screen and (max-width: 768px){
    .nav__toggler{
        display: block;
    }
    .nav__menu{
        position: fixed;
        top:7vh;
        right: 0;
        width: 50%;
        height: 93vh;
        background: #002b5b;
        flex-direction: column;
        transform: translateX(100%);
        transition: 0.5s ease-in;
    }
}


.nav__active{
    transform: translateX(0);
}

/*toggler animation*/
.toggle .line1 {
    transform: rotate(-45deg) translate(-4px,5px);
}
.toggle .line2 {
    opacity: 0;
}
.toggle .line3 {
    transform: rotate(45deg) translate(-4px,-5px);
}

.fa{
    box-sizing: border-box;
    padding: 3px;
    width: 29px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 100%;
    color: #002b5b;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

form:hover .fa{
    background: #002b5b;
    color: white;
}
.Logo {
    color:white;
}
.Logo:hover{
    color:#42c1e0;
}`;
export default navbar