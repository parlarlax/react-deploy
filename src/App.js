// import { Button, Card } from 'react-bootstrap';
import {
  Card, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';
import Meowmodal from './Modal/MeowModal'
import React, { Component } from "react";
import './App.css';
import imageLogo from './asset/image/maeow.jpg'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
  return (
    <div className="App-div-header">
      <Row className="justify-content-center">
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
}
export default App;
