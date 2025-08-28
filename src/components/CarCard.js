import React from 'react';
import { Link } from 'react-router-dom';

// CarCard component to show car summary info
const CarCard = ({ car }) => (
  <div className="card">
    <img src={car.image} alt={car.name} style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }} />
    <h3>{car.name}</h3>
    <p><strong>Brand:</strong> {car.brand}</p>
    <p><strong>Price:</strong> {car.price}</p>
    {/* Link to car details page */}
    <Link className="btn" to={`/cars/${car.id}`}>View Details</Link>
  </div>
);

export default CarCard;
