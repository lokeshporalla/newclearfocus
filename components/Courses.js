import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './Login';
import {Navbar,Nav,navbarDropdown} from 'react-bootstrap';
import { Button } from '@material-ui/core';

class Courses extends React.Component{

  handleClick(){
    <Router>
    <Link to="/Login" ></Link>
    <switch>
<Route path="/Login">
            <Login />
          </Route>
          </switch>
    </Router>
  }
render(){
    return(
        <div>
          <br />
          <Router>
           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  
     {/* <Link as={Link} to="/Login"  class="btn btn-primary btn-lg end" role="button"> <AddIcon /> Add Course</Link>  */}
     <Nav.Link as={Link} to={"/Login"}  active >
       <Button class="btn btn-primary btn-lg end" role="button" onClick={this.handleClick}> <AddIcon /> Add Course</Button> </Nav.Link>
      
</div>
          
          <br />
          <h1 align="left"><b>List Of Courses</b></h1>
          <div class="card border-dark" >
            <div class="card-body table-responsive">
                <table class="table table-hover table-bordered border-primary  text-center table-sm">
  
  
  <thead class="table-light">
    <tr>
      <th scope="col">Course ID</th>
      <th scope="col">Course Name</th>
      <th scope="col">Duration</th>
      <th scope="col">Level</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>React Js Full Stack Developer</td>
      <td>3</td>
      <td>Advanced</td>
      <td>Active</td>
      <td><Link to="/Login">
          <VisibilityIcon />
          </Link>
         </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Angular Full Stack Developer</td>
      <td>3</td>
      <td>Advanced</td>
      <td>Active</td>
      <td><a href="https://material-ui.com/components/material-icons/#material-icons ">
          <VisibilityIcon />
          </a></td>
    </tr><tr>
      <th scope="row">3</th>
      <td>Mobile Application Developer</td>
      <td>1</td>
      <td>Beginner</td>
      <td>Inactive</td>
      <td><a href="https://material-ui.com/components/material-icons/#material-icons ">
          <VisibilityIcon />
          </a></td>
    </tr><tr>
      <th scope="row">4</th>
      <td>React Native  App Developer</td>
      <td>3</td>
      <td>Advanced</td>
      <td>Active</td>
      <td><a href="https://material-ui.com/components/material-icons/#material-icons ">
          <VisibilityIcon />
          </a></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Java Spring Boot Backend Developer</td>
      <td>2</td>
      <td>Intermediate</td>
      <td>Active</td>
      <td><a href="https://material-ui.com/components/material-icons/#material-icons ">
          <VisibilityIcon />
          </a></td>
    </tr>
  </tbody>
</table>
</div>
</div>
<h5 align="left"><b>Total Records Found : 5</b></h5>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
<switch>
<Route path="/Login">
            <Login />
          </Route>
          </switch>
</Router>

        </div>
    );
}
}
export default Courses;
