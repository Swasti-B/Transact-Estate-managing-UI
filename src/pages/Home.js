import React from 'react';
import './Home.css';
import {Nav, Navbar,Tab,Row, Col, Container,Button,Table} from 'react-bootstrap';
import Tables from '../components/Tables';

function Home() {
  return (
    <div className="row">
  <div className="col-lg-12">
  <Container fluid className= "contain">
  <Row>

    <Col lg={1}><Button variant = "default" style={{background:'#D50032', color:"white",borderRadius: '10px',boxSizing:'border-box',border: '1px solid #B71C1C',margin: '10%'}}> + </Button></Col>
    <Col lg={1}><Button variant = "default" style={{background:'#D50032', color:"white",borderRadius: '10px',boxSizing:'border-box',border: '1px solid #B71C1C',margin: '10%'}}> - </Button></Col>
  </Row>
  </Container>
    <div className="row">
      <div className="col-md-4">
      <Container>
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col lg={4}>
      <Nav fill variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link className="nav-tab" eventKey="first">All univs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-tab" eventKey="second">UTA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-tab" eventKey="third">UTD</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    </Row>
</Tab.Container>
</Container>
      </div>
      <div class="col-md-8">
        <Tables />
  
      </div>
    </div>
  </div>
</div>
);
}

export default Home;