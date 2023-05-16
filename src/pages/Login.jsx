import React from 'react'
const Login = () => {
    return (
      <div>
        <form class="login-form">
          <div class="mb-3">
            <label>User Name</label>
            <input class="form-control" type="text" placeholder='User Name'/>
            <input class="login-form" type='password' placeholder='Password' />
          </div>
        </form>
    </div>)
}
export default Login