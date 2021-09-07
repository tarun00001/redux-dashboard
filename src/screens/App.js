import React from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Profile from './Profile'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Cookies from "universal-cookie";
import SideBar from './SideBar';

const cookies = new Cookies();

const App = () => {
    return (
        <div className="ui container">
        <Router>
        
        <Container>
          <Row>
            <Col md={3}>
            <SideBar/>
          </Col>
          <Switch>
          <Col md={9}>
          <Route path="/Signup" exact render={()=>(
            cookies.get("token") ? (alert("You can't register if you are logged in!") ,(<Redirect to="/Login"/>)) : (<Register/>)
        )} />
        <Route path="/Login" exact render={()=>(
            cookies.get("token") ? (alert("You can't login if you are logged in!") ,(<Redirect to="/"/>)) : (<Login/>)
        )} />
        <Route path="/" exact render={()=>(
            cookies.get("token") ? (<Home/>) : (alert("You must be log in to visit this page."), (<Redirect to="/Login"/>))
        )} />
        <Route path="/Profile" exact render={()=>(
            cookies.get("token") ? (<Profile/>) : (alert("You must be log in to visit this page."), (<Redirect to="/Login"/>))
        )} />
       
         
          </Col>
     
          
      </Switch>
      </Row>
      </Container>
        </Router>
        </div>
    )
}

export default App
