import React from 'react';
import { Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Gallery from './components/Gallery'
import GalleryList from './components/GalleryList'

import {Navbar, Nav} from 'react-bootstrap'
import NotFound from './components/NotFound';

class App extends React.Component {

  state ={
    movies : []
  }

  getSuperHeros = () => {
    fetch('https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json')
    .then(res => res.json())
    .then(result => this.setState({ movies : result}))
    .catch(e => console.log(e))
  }

  componentDidMount(){
    this.getSuperHeros()
  }

  render(){
// {match} means i only want match from this.props not the whole props *
// find here return only the object that matches not an array 
  if (!this.state.movies.length) return <div className="App" />;

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">SEI Heros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/gallery" exact render={(props) => <Gallery {...props} movies={this.state.movies} />} />
          <Route path="/gallery/:id" render={({match}) => {

            if(!this.state.movies) return <div className="work">error</div>
                
            return <GalleryList movie={this.state.movies.find(movie => movie.id === parseInt(match.params.id))} />
              }          
          } />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
