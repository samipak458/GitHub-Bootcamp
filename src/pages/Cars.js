import React from 'react';
import CarCard from '../components/CarCard';
import { allCars } from '../data/cars';

// Cars page showing all cars in the showroom
const Cars = () => (
  <div>
    <h2>All Cars</h2>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {/* Map through all cars and show each in a card */}
      {allCars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  </div>
);

export default Cars;
