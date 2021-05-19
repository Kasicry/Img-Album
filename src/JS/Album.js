import { Navbar, Nav, Container, Form, FormControl, Row, Col, Button, Modal } from 'react-bootstrap';
import benjamin from '../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg';
import krismas from '../images/krismas-unUkmr0NF8Q-unsplash.jpg';
import wenhao from '../images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg';

import React, { useState } from "react";
import axios from "axios";
import $ from 'jquery';



function Album(){

  const [name, setname] = useState([
    require(
      "../images/세로4.jpeg").default,
      require( "../images/세로3.jpeg").default, 
      require( "../images/세로1.jpg").default,
      require( "../images/세로2.jpeg").default,
      require( "../images/세로5.jpeg").default,
      require( "../images/세로6.jpeg").default,
      require( "../images/세로7.jpeg").default,
      require( "../images/세로8.jpeg").default,
      require( "../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg").default,
      require( "../images/krismas-unUkmr0NF8Q-unsplash.jpg").default,
      require( "../images/wenhao-ryan-txuo6oDDDEM-unsplash.jpg").default,
      require( "../images/pexels-martin-damboldt-814499.jpg").default,
  ]    
  );

  console.log({name})

  function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function 반복된UI(){

    var 어레이 = [];
    for(var i =0; i< 3; i++){
      어레이.push(<div>안녕</div>);
      
    }
    
    return 어레이;
  }


  

    return(

      <div className="container">          
        
        <div className="row" >
          {/* <div className="col-md-3">
            <img src={require("../images/benjamin-wedemeyer-l-BPJHKGjsk-unsplash.jpg").default} width="100%" />
            <h4>작가</h4>
            <p>benjamin</p>
          </div> */}

        {/* {반복된UI()} */}
        {/* {Example()} */}
          {
            name.map(function(a){
              return(
                <div className="col-md-3">
                <img src={a} width="100%" />
                <h4></h4>
                <p></p>
              </div>

              )
            }
            )}

            

            
          
          
         

        </div>
      </div>        
    );
}

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

export default Album;


        