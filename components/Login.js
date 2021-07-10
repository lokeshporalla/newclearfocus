import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
// import { Form } from "react-bootstrap";
import { Container, Row, Col } from 'react-grid-system';
class Login extends React.Component{

    render(){

        return(
            <div className="forms">
                <h3 align="center"><b>Course Details</b></h3>

            < ReactBootstrap.Form>
            < ReactBootstrap.Form.Group controlId="exampleForm.ControlInput1">
              < ReactBootstrap.Form.Label><b>Course Id</b></ ReactBootstrap.Form.Label>
              < ReactBootstrap.Form.Control type="text" placeholder="Course Id" />
            </ ReactBootstrap.Form.Group>
            < ReactBootstrap.Form.Group controlId="exampleForm.ControlInput1">
              < ReactBootstrap.Form.Label><b>Course Name</b></ ReactBootstrap.Form.Label>
              < ReactBootstrap.Form.Control type="text" placeholder="Course Name" />
            </ ReactBootstrap.Form.Group>
            {/* < ReactBootstrap.Form.Group controlId="exampleForm.ControlInput1">
              < ReactBootstrap.Form.Label>Duration</ ReactBootstrap.Form.Label>
              < ReactBootstrap.Form.Control type="text" placeholder="Duration" />
            </ ReactBootstrap.Form.Group> */}
             <label class="duration"><b>Duration</b></label>
            <div class="container">
                <div class="row justify-content-start">
                  <div class="col-4">
                   
                  < ReactBootstrap.Form.Group controlId="exampleForm.ControlInput1">
             
              < ReactBootstrap.Form.Control type="text" placeholder="Duration" />
            </ ReactBootstrap.Form.Group>
                  </div>
                  <div class="col-4" id="select1">
                  < ReactBootstrap.Form.Control as="select">
                <option>Days</option>
                <option>Weeks</option>
                <option>Months</option>
              </ ReactBootstrap.Form.Control>
                  </div>
                </div>
            </div>
            < ReactBootstrap.Form.Group controlId="exampleForm.ControlSelect1">
              < ReactBootstrap.Form.Label><b>Level</b></ ReactBootstrap.Form.Label>
              < ReactBootstrap.Form.Control as="select">
                <option>Beginer</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </ ReactBootstrap.Form.Control>
            </ ReactBootstrap.Form.Group>
            < ReactBootstrap.Form.Group controlId="exampleForm.ControlSelect1">
              < ReactBootstrap.Form.Label><b>Status</b></ ReactBootstrap.Form.Label>
              < ReactBootstrap.Form.Control as="select">
                <option>Active</option>
                <option>Inactive</option>
              </ ReactBootstrap.Form.Control>
            </ ReactBootstrap.Form.Group>
            {/* < ReactBootstrap.Form.Group controlId="exampleForm.ControlSelect2">
              < ReactBootstrap.Form.Label>Example multiple select</ ReactBootstrap.Form.Label>
              < ReactBootstrap.Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </ ReactBootstrap.Form.Control>
            </ ReactBootstrap.Form.Group> */}

            < ReactBootstrap.Form.Group controlId="exampleForm.ControlTextarea1">
              < ReactBootstrap.Form.Label><b>Description</b></ ReactBootstrap.Form.Label>
              < ReactBootstrap.Form.Control as="textarea" rows={3} placeholder="Descrption" />
            </ ReactBootstrap.Form.Group>
          </ ReactBootstrap.Form>
          <br />
          <div className="buttons1">
          <ReactBootstrap.Button size="lg" href="#">Edit</ReactBootstrap.Button>
          <ReactBootstrap.Button size="lg" href="#" variant="success">Save</ReactBootstrap.Button>
          <ReactBootstrap.Button size="lg" href="#" variant="danger">Cancel</ReactBootstrap.Button>
          </div>
           {/* <ReactBootstrap.Button type="submit">Button</ReactBootstrap.Button>{' '} */}
          </div>
    
            
        );
    }
}
export default Login;