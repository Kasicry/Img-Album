import {Link, Route, Switch} from 'react-router-dom';
import { Button, Navbar, Nav, Container, Form, FormControl, Row, Col } from 'react-bootstrap';

function Signup(){
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

          {/* <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group> */}

          {/* <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row> */}

          {/* <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Link to="/">
            <Button variant="primary" type="submit">
                Sign up
            </Button>
          </Link>



          <Link to="/">
            <Button variant="primary" type="submit">
                Cancel
            </Button>
          </Link>
          
        </Form>
      </div>
      
    );
}

export default Signup;