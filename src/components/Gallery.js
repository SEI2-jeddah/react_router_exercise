import React, {Component} from 'react'
import { Col, Row,Container, Card  } from 'react-bootstrap'

class Gallery extends Component {
 state ={
  movies : []
 }
 componentDidMount(){
  fetch('https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json')
  .then(res => res.json())
  .then( result => this.setState({ movies : result}))
  .catch(e => console.log(e))
 }

 render(){
  return (
   <div>
    <Container>
      <Row>
      {this.state.movies.map(movie => <Col md={3}>
            <Card>
            <Card.Img variant="top" src={movie.images.md} />
              <Card.Body>
                {/* <img src= /> */}
                <a href={`/gallery/${movie.name}`}> {movie.name} </a>
              </Card.Body>
            </Card>
           </Col>)}
      </Row>
    </Container>
   
   </div>
  )
 }

}

export default Gallery
