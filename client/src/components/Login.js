import React from 'react';
import '../styles/Login.css';
import Header from '../components/Header.js'

function Login() {
    return (
        <div>
               
    <div class="d-flex flex-column justify-content-center w-100 h-100">
        <Header/>
      <div style={{display:"flex",flex:"column",justifyContent:"center",width:"100%",height:"100%"}}>
      </div>
    </div>


    <div style={{display:"flex",flex:"column", justifyContent:"center",width:"100%",height:"100%", padding:"03%", margin:"0%", alignItems:"center"}}></div>
    <div class="row ">
    <div class="col-med-6 mb-3 mb-sm-0 w-50 text-center mx-auto">
     <div class="card border-dark">
       <div class="card-body ">
        <form>
            <h5><b><label class="label">Music User Login:</label></b></h5>
            <br/>
            <div class="row mb-3">
              <label for="inputUsername3" class="col-sm-2 col-form-label">Username:</label>
              <div class="col-sm-10">
                <input type="type" class="form-control" id="inputUsername3"/>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3"/>
              </div>
            </div>
            
            <button type="submit" id="signupbtn" class="btn btn-dark"><b>Login</b></button>
          </form>
    </div>
  </div>
</div>


<div style={{display:"flex",flex:"column", justifyContent:"center",width:"100%",height:"100%", padding:"0", margin: "03%", alignItems:"center"}}></div>
<div class="row"/>
    <div class="col-med-6 mb-3 mb-sm-0 w-50 text-center mx-auto">
      <div class="card border-dark">
        <div class="card-body">
            <form>
                <h5><b><label class="label">Sign up for New Music User:</label></b></h5>
                <br/>
                <div class="row mb-3">
                  <label for="inputUsername3" class="col-sm-2 col-form-label">Username:</label>
                  <div class="col-sm-10">
                    <input type="type" class="form-control" id="inputUsername3"/>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
                  <div class="col-sm-10">
                    <input type="type" class="form-control" id="inputUsername3"/>
                  </div>
                </div>
                <div class="col-12"></div>
                <button type="submit" id="signupbtn" class="btn btn-dark"><b>Sign up</b></button>
              </form>
        </div>
      </div>
    </div>
    </div>

    <br/>
    <br/>
    <br/>

</div>

    );
}

export default Login;