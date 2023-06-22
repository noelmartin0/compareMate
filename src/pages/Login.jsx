import React,{useState} from "react";
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
const Login = () => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const logInUser = () => {

    if(email.length===0){
      alert("email field empty!");
    }
    else if(password.length === 0){
      alert("password field empty!");
    }
    else{
        axios.post('http://127.0.0.1:5000/login', {
          email: email,
          password: password
       })
      .then(function (response) {
          console.log(response);
        navigate('/');
      })

      .catch(function (error) {
        console.log(error, "error");
        if(error.response.status=== 401){
          alert("invalid Credentials");
        }
      });
    }
  };

  return (
    <LOGIN>
    <div className="container">
      <h1 className="login-title">Log in</h1>

      <form className="login-form">
        <div>
          <label htmlfor="name">Email Id </label>
          <input
            id="name"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="name"
            required
          />
        </div>


        <div>
          <label htmlfor="password">Password </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <button className="btn btn--form" type="button"  onClick={logInUser} >
          Log in
        </button>
        <h6 className="fw-light text-center">OR</h6>
        <div className="social">
          <a href="#"><FontAwesomeIcon  className="oauth" icon={faGoogle} size="2xl" /></a>
          <a href="#"><FontAwesomeIcon  className="oauth" icon={faFacebook} size="2xl"/></a>
          <a href="#"><FontAwesomeIcon  className="oauth" icon={faTwitter} size="2xl"/></a>
        </div>
      </form>
    </div>
    </LOGIN>
  );
};


const LOGIN = styled.nav`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

html {
  background-repeat: no-repeat;
  background-size: cover;
  background-color: red;
  width: 100%;
  height: 100%;
}

body {
  font-family: sans-serif;
  line-height: 1.4;
  display: flex;
}

.container {
  width: 400px;
  margin: auto;
  margin-top: 50px;
  padding: 36px 48px 48px 48px;
  background-color: rgba(87,197,182,0.1);

  border-radius: 11px;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
}

.login-title {
  padding: 15px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
}

.login-form {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
}

.login-form label {
  display: block;
  margin-bottom: 8px;
}

.login-form input {
  width: 100%;
  padding: 1.2rem;
  border-radius: 9px;
  border: none;
}

.login-form input:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(253, 242, 233, 0.5);
}

.btn--form {
  background-color: #002B5B;
  color: #fff;
  align-self: end;
  padding: 8px;
}

.btn,
.btn:link,
.btn:visited {
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  border-radius: 9px;
  border: none;

  cursor: pointer;
  font-family: inherit;

  transition: all 0.3s;
}

button {
  outline: 1px solid #002B5B;
}

.login-title{
  size:0.5rem
}

.btn--form:hover {
  background-color: #fff;
  color: #002B5B;
}

.social {
  display: flex;
  justify-content: center;
}

.social a {
  margin: auto 30px auto 30px;
}
.oauth {
  color:black;
}
.oauth:hover{
  color:#0e66c3;
}
.oauth:active{
  color:steelblue
}
`;

export default Login;
