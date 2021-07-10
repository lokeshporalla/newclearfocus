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



    </div>
  );
}

export default App;
