import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/Login.css';
import Signup from './Signup'

function Login(props) {
  const [formState, setFormState] = useState({ userName: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { userName: formState.userName, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return (
    <div>

    <div style={{display:"flex",flex:"column", justifyContent:"center",width:"100%",height:"100%", padding:"01%", margin:"0%", alignItems:"center"}}></div>
    <div className="row ">
    <div className="col-med-6 mb-3 mb-sm-0 w-50 text-center mx-auto">
    <div className="card border-dark">
      <div className="card-body ">
        {error && <div className="alert alert-danger">{error.message}</div>}
        <form onSubmit={handleLoginSubmit}>
            <h5><b><label className="label">Music User Login:</label></b></h5>
            <br/>
            <div className="row mb-3">
              <label for="inputUsername3" className="col-sm-2 col-form-label">Username:</label>
              <div className="col-sm-10">
                <input name="userName" value={formState.userName} type="text" className="form-control" id="inputUsername3" onChange={handleChange}/>
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputPassword3" className="col-sm-2 col-form-label">Password:</label>
              <div className="col-sm-10">
                <input name="password" value={formState.password} type="password" className="form-control" id="inputPassword3" onChange={handleChange}/>
              </div>
            </div>
            
            <button type="submit" id="signupbtn" className="btn btn-dark"><b>Login</b></button>
          </form>
    </div>
  </div>
</div>
      <div><Signup /></div>
  

    </div>

    <br/>
    <br/>
    <br/>

</div>


    );
}

export default Login;