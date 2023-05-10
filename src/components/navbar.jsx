import React, {useState} from 'react'
import '../navbar.css';
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
    <nav className="nav">
        <a href="#" className="nav__brand">CompareMate</a>
       {/*<div classname="search_box">
            <input type='search' placeholder='search here'></input>
            <span className='fa fa-search'></span>
        </div>*/}
        <ul className={active}>
            <li className="nav__item"><a href="#" className="nav__link">Search</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Wishlist</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Account</a></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  )
}

export default navbar