import React, { useState } from 'react';
import './AddPackages.css';

const AddPackages = () => {
  const [packages, setPackages] = useState([]);
  const [packageDetails, setPackageDetails] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageDetails({
      ...packageDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPackages([...packages, packageDetails]);
    setPackageDetails({
      name: '',
      description: '',
      price: '',
      duration: '',
      type: '',
    });
  };

  const handleDelete = (index) => {
    setPackages(packages.filter((_, i) => i !== index));
  };

  return (
    <div className="add-packages-page">
      <h2>Add The Packages</h2>
      <div className="packages-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={packageDetails.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input type="text" name="description" value={packageDetails.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="number" name="price" value={packageDetails.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Duration:</label>
            <input type="text" name="duration" value={packageDetails.duration} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <select name="type" value={packageDetails.type} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          <button type="submit">Add Package</button>
        </form>
      </div>
      <div className="packages-table">
        <h2>Package List</h2>
        {packages.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr key={index}>
                  <td>{pkg.name}</td>
                  <td>{pkg.description}</td>
                  <td>{pkg.price}</td>
                  <td>{pkg.duration}</td>
                  <td>{pkg.type}</td>
                  <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No packages added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddPackages;
