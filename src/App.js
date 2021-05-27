import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Jumbotron } from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './JS/Login';
import Mynavbar from './JS/Mynavbar'
import Album from './JS/Album';
import Signup from './JS/Signup';
import Music from './JS/Music'
import Picture from './JS/Picture';
import './footer.css'
import $ from 'jquery';


function App() {

  const [name, setname] = useState([
    require("./images/세로4.jpeg").default,
    require("./images/세로3.jpeg").default, 
    require("./images/세로1.jpg").default,
    require("./images/세로2.jpeg").default,
    require("./images/세로5.jpeg").default,
    require("./images/세로6.jpeg").default,
    require("./images/세로7.jpeg").default,
    require("./images/세로8.jpeg").default,
    require("./images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg").default,
    require("./images/krismas-unUkmr0NF8Q-unsplash.jpg").default,
    require("./images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg").default,
    require("./images/pexels-martin-damboldt-814499.jpg").default,
  ]    
  );
  
  const [name2, setname2] = useState([
    "세로4.jpeg",
    "세로3.jpeg", 
    "세로1.jpg",
    "세로2.jpeg",
    "세로5.jpeg",
    "세로6.jpeg",
    "세로7.jpeg",
    "세로8.jpeg",
    "benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg",
    "krismas-unUkmr0NF8Q-unsplash.jpg",
    "wenhao-ryan-txuo6oDDDEM-unsplash.jpg",
    "pexels-martin-damboldt-814499.jpg",
]    
);


function Header() {
  return (
    <header className="headcss">
      <div id='logo'>Lorem ipsum</div>
      <nav>
        <ul>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>  
    </header>
  );
}

function ContactForm() {
  
  const validateEmail = (e) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) === false) {
      e.target.style.borderColor = 'red';
    } else {
      e.target.style.borderColor = 'gainsboro';
    }
  }
  
  const checkIfEmpty = (e) => {
    if (e.target.value.length <= 0) {
      e.target.style.borderColor = 'red';
    } else {
      e.target.style.borderColor = 'gainsboro';
    }
  }
  
  const handleSubmit = (e) => {
    
    const name = document.getElementById('name'),
          email = document.getElementById('email'),
          subject = document.getElementById('subject'),
          message = document.getElementById('message');
    
    if (name.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else if (email.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else if (subject.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else if (message.value === '') {
      e.preventDefault();
      alert('All fields must be filled out before submitting.');
    } else {
      e.preventDefault();
      alert(`Thank you ${name.value}, we will be in touch with you shortly.`);
      [name.value, email.value, subject.value, message.value] = ['','','',''];
    }
  }
  
  return (
    <main>
      <form id='contact'>
        <h3>Get in touch with us!</h3>
        <div id='contact-info'>
          <input 
            onChange={checkIfEmpty}
            type='text' 
            id='name' 
            placeholder='Name'
          />
          <input 
            onChange={validateEmail}
            type='text' 
            id='email' 
            placeholder='Email'
          />
        </div>  
        <input 
          onChange={checkIfEmpty}
          type='text' 
          id='subject' 
          placeholder='Subject'
        />
        <textarea 
          onChange={checkIfEmpty}
          id='message'
        >
        </textarea>
        <button 
          onClick={handleSubmit}
          type='submit' 
          form='contact' 
          value='submit'
        >
          Submit
        </button>
      </form>
    </main>  
  );
}




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

        <Album name={name} name2={name2} />


        <br />
      <br />

      

        

      </Route>

      <Route exact path="/Music">

        <Mynavbar />     

        <div className="Music-center">
          
          
        </div>
      
        <Music />
      <br />
      <br />


      </Route>

      <Route exact path="/Picture">

        <Mynavbar />     

        <Picture />

        <br />
      <br />


      </Route>


    </div>
  );
}

export default App;
