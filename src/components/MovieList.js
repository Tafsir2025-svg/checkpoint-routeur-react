import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.length ? movies.map((m, i) => <MovieCard key={i} movie={m} />) : <p>Aucun film trouvé.</p>}
    </div>
  );
}

export default MovieList;
