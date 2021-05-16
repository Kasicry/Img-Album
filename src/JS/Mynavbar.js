import React from 'react'
import { Button, Navbar, Nav, Container, Form, FormControl, Row, Col } from 'react-bootstrap';

import {Link, Route, Switch} from 'react-router-dom';

function Mynavbar(){
    return(
        <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
          {/* <Nav.Item>
            <Nav.Link eventKey="link-1" as={Link} to="/">Home</Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
          <Link to="/Album">
          <div>
          <Nav.Link eventKey="link-1" as={Link} to="/Album">Album</Nav.Link>
          </div>
          </Link>          
          </Nav.Item>
          <Nav.Item>
          <Link to="/Music">
            <div>
            <Nav.Link eventKey="link-2" as={Link} to="/Music">Music</Nav.Link>
            </div>
          </Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/Picture">
            <div>
            <Nav.Link eventKey="link-3" as={Link} to="/Picture">Picture</Nav.Link>
            </div>
          </Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link-4" as={Link} to="/">Logout</Nav.Link>
          </Nav.Item>          
        </Nav>        
        <hr />
        </div>

    )

}

export default Mynavbar;