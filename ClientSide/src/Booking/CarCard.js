import React from 'react'
import Card from 'react-bootstrap/Card';

export default function CarCard({ image, name, milage }) {
  return (
    <Card className='card'>
      <div className="img">
        <Card.Img 
          src={`https://car-rental-app-server.onrender.com/cars/${image}`} 
          alt={`${name} vehicle`}
        />
      </div>
      <div id="cardBodys">
        <Card.Body>
          <div id="seater">
            <Card.Text id="person">{name}</Card.Text>
          </div>
          <div id="name-container">
            <Card.Text id="name">6 persons</Card.Text>
            <Card.Text id="milage">{milage}</Card.Text>
          </div>
        </Card.Body>
        <div id="booking">
          <Card.Link id="fare">Fare Details</Card.Link>
          <Card.Link href="/payment" id="book">Book Now</Card.Link>
        </div>
      </div>
    </Card>
  );
}