import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row bg='dark' variant='dark' className=''>          
          <Col  className='text-center py-3'>&copy; FPRTstore by Vibhor</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
