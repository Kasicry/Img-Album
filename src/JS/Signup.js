import {Link, Route, Switch} from 'react-router-dom';
import { Button, Navbar, Nav, Container, Form, FormControl, Row, Col } from 'react-bootstrap';

function Signup(){

  const btnstyle={   
    
    marginLeft: "25px"
}  

    return(
        
        <div className="Signup-position">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Id</Form.Label>
              <Form.Control type="email" placeholder="Id" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control placeholder="ex ) 30" />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="ex ) 010-0000-0000" />
          </Form.Group>       

          <Link to="/">
            <Button variant="primary" type="submit">
                Sign up
            </Button>
          </Link>

          <Link to="/">
            <Button variant="primary" type="submit" className="btn-submit" style={btnstyle}>
                Cancel
            </Button>
          </Link>
          
        </Form>
      </div>
      
    );
}

export default Signup;