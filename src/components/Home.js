import React from 'react'
import { Row, Col, Jumbotron, Card, Container } from 'react-bootstrap'


const Home = () => {
 return (
  <div>
   <Jumbotron>
    Tets
   </Jumbotron>

   <Container fluid>
   <Row>
    <Col>
     <Card>
      <Card.Body>
       image
      </Card.Body>
     </Card>
    </Col>
    <Col>
    <Card>
      <Card.Body>
       image
      </Card.Body>
     </Card>
    </Col>
    <Col>
    <Card>
      <Card.Body>
       image
      </Card.Body>
     </Card>
    </Col>
   </Row>
   </Container>
  </div>
 )
}

export default Home
