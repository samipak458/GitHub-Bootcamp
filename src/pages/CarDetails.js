import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allCars } from '../data/cars';

// CarDetails page shows details for a single car
const CarDetails = () => {
  const { id } = useParams();
  // Find the car by id
  const car = allCars.find(c => c.id === parseInt(id));

  if (!car) {
    return <div>Car not found.</div>;
  }

  return (
    <div>
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} style={{ maxWidth: '400px', borderRadius: '8px' }} />
      <p><strong>Brand:</strong> {car.brand}</p>
      <p><strong>Price:</strong> {car.price}</p>
      <p><strong>Description:</strong> {car.description}</p>
      <Link className="btn" to="/cars">Back to Cars</Link>
    </div>
  );
};

export default CarDetails;
