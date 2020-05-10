// import { Button, Card } from 'react-bootstrap';
import {
  Card, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageLogo from './asset/image/maeow.jpg'

function App() {
  return (
    <div className="App-div-header">
      <Row>
        <Col md="10" xs="12"
          className="text-center"
        >
          <Card className="d-flex ">
            <CardBody className="justify-content-center">
              <CardTitle><strong>Test My React-Deploy</strong></CardTitle>
              <br />
              <div className="d-flex justify-content-center">
                <img width="50%" src={imageLogo} className="App-logo" alt="logo" />
              </div>
              <br />
              <p style={{ Color: '#f0f0f0', borderColor: '#333' }}>
                <strong>REACT IS AWSOME</strong>
              </p>
              <Button 
              onClick={()=>{ alert('Meow Meow'); }}
              color="primary"
              >Just Click!
              </Button>


            </CardBody>
          </Card>

        </Col>
      </Row>

    </div>
  );
}

export default App;
