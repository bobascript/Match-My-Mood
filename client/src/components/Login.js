import React from 'react';
import '../styles/Login.css';
import Header from '../components/Header.js'

function Login() {
    return (
        <div>
        <div class="d-flex flex-column justify-content-center w-100 h-100">
            <Header/>
          <div style={{display:"flex",flex:"column",justifyContent:"center",width:"100%",height:"100%"}}>
            <button className="loginBtn" >Log in /<br/>Sign up!</button>
          </div>
          
        <div class="row ">
            <div class="col-med-6 mb-3 mb-sm-0 ">
              <div class="card">
                <div class="card-body ">
                    <form>
                        <label class="label">Music User Login:</label>
                        <br/>
                        <div class="row mb-3">
                          <label for="inputUsername3" class="col-sm-2 col-form-label">Username</label>
                          <div class="col-sm-10">
                            <input type="type" class="form-control" id="inputUsername3"/>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                          <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3"/>
                          </div>
                        </div>
                        
                        <button type="submit" id="loginpagebtn" class="btn btn-primary">Login</button>
                      </form>
                </div>
              </div>
            </div>
            
       

        <br/>
        <br/>
    
      
    
            <div class="row"/>
                <div class="col-med-6 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                        <form>
                            <label class="label">Sign up for New Music Users:</label>
                            <br/>
                            <div class="row mb-3">
                              <label for="inputUsername3" class="col-sm-2 col-form-label">Username</label>
                              <div class="col-sm-10">
                                <input type="type" class="form-control" id="inputUsername3"/>
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                              <div class="col-sm-10">
                                <input type="type" class="form-control" id="inputUsername3"/>
                              </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                  <label class="form-check-label" for="gridCheck">
                                    I agree
                                  </label>
                                </div>
                              </div>
                            <button type="submit" id="signupbtn" class="btn btn-primary">Sign up</button>
                          </form>
                    </div>
                  </div>
                </div>

    );
}

export default Login;