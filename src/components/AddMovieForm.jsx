import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovieForm.css'; 
const AddMovieForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Movie submitted, thankyou!')
    console.log('Movie submitted!');
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="movie-form">
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          Director:
          <input type="text" name="director" required />
        </label>
        <label>
          Genre:
          <select name="genre" required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </label>
        <label>
          Release Year:
          <input type="number" name="releaseYear" required />
        </label>
        <label>
          Synopsis:
          <textarea name="synopsis" required></textarea>
        </label>
        <label>
          Poster Image URL:
          <input type="url" name="posterUrl" required />
        </label>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;