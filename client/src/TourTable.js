import React from 'react';
import './TourTable.css';

const TourTable = ({ tours, onDeleteTour, onEditTour }) => {
  return (
    <div className="tour-table">
      <h2>Tour Details</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={index}>
              <td>{tour.location}</td>
              <td>{tour.title}</td>
              <td>{tour.price}</td>
              <td>{tour.rating}</td>
              <td><img src={tour.image} alt="Tour" className="tour-image" /></td>
              <td>
                <button onClick={() => onEditTour(index)}>Edit</button>
                <button onClick={() => onDeleteTour(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourTable;
