import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
 import * as ReactBootstrap from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Navbar,Nav,navbarDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
  <Router>
    
       <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
  <a class="navbar-brand bg-light" href="#"><img src="http://www.clearfocus.in/wp-content/uploads/2018/01/cropped-2.png" alt="error" width="60PX" height="60PX"></img></a>
    <a class="navbar-brand" href="#">ClearFocus</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
        {/* <Link to="/Home" class="nav-link active" >Home</Link> */}
        <Nav.Link as={Link} to={"/Home"}  active> Home </Nav.Link>
        </li>
        <li class="nav-item">
        {/* <Link to="/Courses" class="nav-link active" >Courses</Link> */}
        <Nav.Link as={Link} to={"/Courses"} active> Courses </Nav.Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Students</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Registrations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Payments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Certificates</a>
        </li>
   
        </ul>
      <span className="dropdown">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Profile
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">About Us</a></li>
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
        </ul>
      </span>
    </div>
  </div>
</nav>
  

      <div>
         <Switch>
         <Route path="/Home" >
          <Home />
          </Route>
          <Route path="/Courses">
            <Courses />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
<div className=" Information" >
              <label>Course Id</label>
         <input type="number" onChange={(event)=>{setCourse_id(event.target.value);
      }}></input>
      <label>Course Name</label>
      <input type="text"  onChange={(event)=>{setCourse_name(event.target.value);
      }}></input>
        <label>Course Duration</label>
     <input type="number"  onChange={(event)=>{setCourse_duration(event.target.value);
      }}></input>
      <label>Level</label>
         <input type="text"  onChange={(event)=>{setLevel(event.target.value);
      }}></input>
        <label>Status</label>
       <input type="text" onChange={(event)=>{setStatus(event.target.value);
      }}></input>
      <label>Course Timings</label>
            <input type="text"  onChange={(event)=>{setCourse_timings(event.target.value);
      }}></input>
          </div>&nbsp;<br/>&nbsp;<br/>
      <div id='buttons'>
      <button onClick={addCourses}>Add new object</button>
       <button onClick = {getCourses}>show courses</button></div><br/>&nbsp;<br/>
        <div className='getCourses'>
        <table>       
          <tr>            
          <th>Course Id</th>
          <th>Course Name</th>
          <th>Course Duration</th> 
          <th>Level</th>
          <th>Status</th>
           <th>Course Timings</th>
           <th>Course Fee</th>
           </tr>
          {courses.map((val, key) =>{
      return (
      <tr>
        <td> {val.course_id}</td>
         <td> {val.course_name}</td>
         <td> {val.course_duration}</td>
        <td> {val.level}</td>
        <td> {val.status}</td>
        <td> {val.course_timings}</td>
        <td> {val.course_fee}</td>
      </tr>
       ); }   )}
      </table>
  </div> &nbsp;<br/>&nbsp;<br/>
  <Router>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <p>This website helps you to add <br/>or view courses available</p>
  {/ <a class="navbar-brand bg-light" href="#"><img src="http://www.clearfocus.in/wp-content/uploads/2018/01/cropped-2.png" alt="error" width="60PX" height="60PX"></img></a> /}
    {/* <a class="navbar-brand" href="#">ClearFocus</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <Nav.Link as={Link} to={"/Home"}  active> Home </Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link as={Link} to={"/Courses"} active> Courses </Nav.Link>
        </li> */}
        &nbsp;<br/>&nbsp;<br/>
        <li class="nav-item justify-content-end">
          <a class="nav-link active" href="#"><img src='data:image/jpeg;base64,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'></img></a>
        </li>
        <li class="nav-item justify-content-end">
          <a class="nav-link active" href="#"><img src='https://www.kindpng.com/picc/m/407-4074389_linkedin-icon-png-round-transparent-png.png'></img></a>
        </li>
        <li class="nav-item justify-content-end">
          <a class="nav-link active" href="#"><img src='https://icon-library.com/images/instagram-round-icon-png/instagram-round-icon-png-5.jpg'></img></a>
        </li>
         </ul>
       </div>
  </div>
</nav>
<div>
</div>
</Router>


    </div>
  );
}

export default App;
