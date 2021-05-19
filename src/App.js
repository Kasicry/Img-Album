import React, { useEffect } from 'react'
import { Button, Navbar, Nav, Container, Form, FormControl, Row, Col } from 'react-bootstrap';
import benjamin from '../src/images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg';
import krismas from '../src/images/krismas-unUkmr0NF8Q-unsplash.jpg';
import wenhao from '../src/images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './JS/Login';
import Mynavbar from './JS/Mynavbar'
import Album from './JS/Album';
import Signup from './JS/Signup';
import Music from './JS/Music'
import Picture from './JS/Picture';
import $ from 'jquery';


function App() {



  return (
    <div className="App">

      <Route exact path="/">

        <Login />

      
      </Route>

      <Route exact path="/Signup">

        <Signup />


      </Route>

      
      <Route exact path="/Album">

        <Mynavbar />        

        <Navbar bg="light" variant="light">        
          <Nav className="mr-auto">
            <Navbar.Brand href="">Did you take a beautiful picture? <img src={require("./images/99A783505D15071406.png").default} width="100%" className="title-image" /> </Navbar.Brand>
          </Nav>
                  
        </Navbar>

        <Album />

      </Route>

      <Route exact path="/Music">

        <Mynavbar />     

        <Navbar bg="light" variant="light">        
          <Nav className="mr-auto">
            <Navbar.Brand href=""> PlayList 가</Navbar.Brand>
          </Nav>
                
        </Navbar> 

        <Music />

        <Navbar bg="light" variant="light">        
          <Nav className="mr-auto">
            <Navbar.Brand href=""> PlayList 나</Navbar.Brand>
          </Nav>
                
        </Navbar> 

        <Navbar bg="light" variant="light">        
          <Nav className="mr-auto">
            <Navbar.Brand href=""> PlayList 다</Navbar.Brand>
          </Nav>
                
        </Navbar> 





      </Route>

      <Route exact path="/Picture">

        <Mynavbar />     

        <Picture />





      </Route>

    </div>
  );
}

export default App;
