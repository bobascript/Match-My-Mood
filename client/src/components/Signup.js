import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/Login.css';

function Signup(props) {
  const [formState, setFormState] = useState({ userName: '', password: '' });
  const [addUser, { error: adduserError }] = useMutation(ADD_USER);
  
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: { userName: formState.userName, password: formState.password },
      });
      const token = mutationResponse.data.addUser.token;
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
<div style={{display:"flex",flex:"column", justifyContent:"center",width:"100%",height:"100%", padding:"0", margin: "1%", alignItems:"center"}}></div>
<div className="row"/>
    <div className="col-med-6 mb-3 mb-sm-0 w-50 text-center mx-auto">
      <div className="card border-dark">
        <div className="card-body" id="cardsignup">
          {adduserError && <div className="alert alert-danger">{adduserError.message}</div>}
          <form onSubmit={handleSignupSubmit}>
            <h5><b><label className="label">Sign up for New Music User:</label></b></h5>
            <br />
            <div className="row mb-3">
              <label for="inputUsername4" className="col-sm-2 col-form-label">Username:</label>
              <div className="col-sm-10">
                <input name="userName" value={formState.userName} type="text" className="form-control" id="inputUsername4" onChange={handleChange} />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputPassword4" className="col-sm-2 col-form-label">Password:</label>
              <div className="col-sm-10">
                <input name="password" value={formState.password} type="password" className="form-control" id="inputPassword4" onChange={handleChange} />
              </div>
            </div>
            <div className="col-12"></div>
            <button type="submit" id="signupbtn" className="btn btn-dark"><b>Sign up</b></button>
          </form>
        </div>
      </div>
    </div>
</div>

)}

export default Signup;