import {Link, Route, Switch} from 'react-router-dom';

function Login(){
    return(
        
        <div className="login login-position">

          <form className="form-signin">
              <h2 className="form-signin-heading"> Please sign in </h2>
              <label for="inputID" className="btn-block"> </label>
              
              <input type="email" id="inputEmail" className="form-control" placeholder="ID" required autofocus />
              
              <label for="inputPassword" className="btn-block"></label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

              <Link  to="/Album">
                <button className="btn btn-lg btn-primary btn-block" type="button"> Login              
                </button>
              </Link>

              <Link  to="/Signup">
              <button className="btn btn-lg btn-primary btn-block" type="button"> 
              Sign Up
              </button>
              </Link>
          </form>
        </div>
    );
}

export default Login;