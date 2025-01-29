import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovieForm.css'; 

const AddMovieForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Movie submitted, thank you!'); 
    console.log('Movie submitted!');
    navigate('/'); 
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="movie-form">
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" name="title" required />

        <label htmlFor="director">Director:</label>
        <input id="director" type="text" name="director" required />

        <label htmlFor="genre">Genre:</label>
        <select id="genre" name="genre" required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>

        <label htmlFor="releaseYear">Release Year:</label>
        <input id="releaseYear" type="number" name="releaseYear" required />

        <label htmlFor="synopsis">Synopsis:</label>
        <textarea id="synopsis" name="synopsis" required></textarea>

        <label htmlFor="posterUrl">Poster Image URL:</label>
        <input id="posterUrl" type="url" name="posterUrl" required />


        <div className="form-buttons">
          <button type="submit">Submit</button> 
          <button type="button" onClick={() => navigate('/')}>Cancel</button> 
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
