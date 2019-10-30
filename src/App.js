import React from 'react';
import { Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom'
import './App.css';
import About from './components/About'
import Gallery from './components/Gallery'
import GalleryList from './components/GalleryList'
import Contact from './components/Contact'

import {Navbar, Nav} from 'react-bootstrap'
import NotFound from './components/NotFound';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/gallery">Link</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
        <Switch>

          <Route exact path="/about" component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/gallery/:name" component={GalleryList} />
          <Route path="/contact" render={(props) => <Contact {...props} name="Yazeed" />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
