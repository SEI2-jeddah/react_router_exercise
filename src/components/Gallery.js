import React from 'react'
import { Col, Row,Container, Card  } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Gallery = (props) => {
 
 let allGallery = props.movies.map(movie => <Col md={4}>
  <Card className="mb-3">
  <Card.Img variant="top" src={movie.images.md} />
    <Card.Body>
      <NavLink className="btn btn-primary btn-block" to={`/gallery/${movie.id}`}>{movie.name}</NavLink>
    </Card.Body>
  </Card>
 </Col>)

  return (
   <div className="mt-3">
    <Container>
      <Row>
       {allGallery}
      </Row>
    </Container>  
   </div>
  )
}

export default Gallery
