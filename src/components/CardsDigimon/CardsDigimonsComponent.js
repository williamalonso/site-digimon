import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import api from '../../services/api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CardsDigimonsComponent extends Component {

  state = {
    digimons: [
      {
        
      }
    ]
  }

  async componentDidMount() {
    const digimons_api = await api.get('digimon/level/rookie');

    const digimonsWithId = digimons_api.data.map( digimons => ({
      ...digimons,
      id: uuidv4()
    }));

    this.setState({
      digimons: digimonsWithId
    })
  }

  render() {

    return(
      <>
        { 
          this.state.digimons.slice(0, 8).map( (digimon, index) => {
            // console.log(digimon);
            return(
              <Card key={index} style={{ width: '18rem' }} className="mt-5">
                <Card.Img variant="top" src={digimon.img} style={{minHeight: '191px'}} />
                <Card.Body>
                  <Card.Title>Nome: {digimon.name}</Card.Title>
                  <Card.Text>
                    Level: {digimon.level}
                  </Card.Text>
                  <Button variant="primary">Ver digimon</Button>
                </Card.Body>
              </Card>
            );
          })
        }
      </>
    );
  }

}

export default CardsDigimonsComponent;