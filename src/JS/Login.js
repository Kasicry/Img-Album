import { Jumbotron, Button, Navbar, Nav, Container, Form, FormControl, Row, Col } from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
import bridge from '../images/pexels-martin-damboldt-814499.jpg';
import '../App.css'

function Login(){
    return(
        
        <div className="login login-position">

          

          <div className="Login-background">
            
                <br />
                <br />
                <br />                            
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />                
                <br />
                <br />
                <br />
                <br />              
            
          </div>
          
          <form className="form-signin">
              <h2 className="form-signin-heading">  </h2>
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