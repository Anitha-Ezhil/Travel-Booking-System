import React, { useState } from 'react';
import './AddTour.css';

const AddTour = () => {
  const [tours, setTours] = useState([]);
  const [tourDetails, setTourDetails] = useState({
    location: '',
    title: '',
    price: '',
    rating: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourDetails({
      ...tourDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTours([...tours, tourDetails]);
    setTourDetails({
      location: '',
      title: '',
      price: '',
      rating: '',
      image: ''
    });
  };

  const handleDelete = (index) => {
    setTours(tours.filter((_, i) => i !== index));
  };

  return (
    <div className="add-tour-page">
      <h2>Add The Tour</h2>
      <div className="tour-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Location:</label>
            <input type="text" name="location" value={tourDetails.location} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={tourDetails.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="number" name="price" value={tourDetails.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <input type="number" name="rating" value={tourDetails.rating} onChange={handleChange} required min="0" max="5" step="0.1" />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input type="text" name="image" value={tourDetails.image} onChange={handleChange} required />
          </div>
          <button type="submit">Add Tour</button>
        </form>
      </div>
      <div className="tour-table">
        <h2>Tour List</h2>
        {tours.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Title</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour, index) => (
                <tr key={index}>
                  <td>{tour.location}</td>
                  <td>{tour.title}</td>
                  <td>{tour.price}</td>
                  <td>{tour.rating}</td>
                  <td><img src={tour.image} alt={tour.title} className="tour-image" /></td>
                  <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tours added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddTour;
