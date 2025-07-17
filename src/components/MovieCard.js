import React from 'react';

function MovieCard({ movie }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: '1rem',
      width: 250,
      margin: '1rem'
    }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', borderRadius: 4 }} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <strong>Note : {movie.rating}/5</strong>
    </div>
  );
}

export default MovieCard;
