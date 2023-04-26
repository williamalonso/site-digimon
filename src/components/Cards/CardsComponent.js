import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import beach from '../../assets/beach.avif';
import boat from '../../assets/boat.avif';
import colors from '../../assets/colors.avif';

const CardsComponent = () => {

  const cardsInfo = {
    cards: [
      {
        id: '1',
        title: 'Título 1',
        description: 'Descrição 1',
        img: beach
      },
      {
        id: '2',
        title: 'Título 2',
        description: 'Descrição 2',
        img: boat
      },
      {
        id: '3',
        title: 'Título 3',
        description: 'Descrição 3',
        img: colors
      }
    ]
  }

  return(
    cardsInfo.cards.map( (e) => {
      return (
        <Card key={e.id} style={{ width: '18rem' }} className="mt-5">
          <Card.Img variant="top" src={e.img} style={{minHeight: '191px'}} />
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>
              {e.description}
            </Card.Text>
            <Button variant="primary">Clique Aqui</Button>
          </Card.Body>
        </Card>
      );
    })
  );
}

export default CardsComponent;