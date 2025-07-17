import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const initialMovies = [
  {
    title: "Inception",
    description: "Un voleur s'infiltre dans les rêves.",
    posterURL: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    rating: 4.8
  },
  {
    title: "Interstellar",
    description: "Voyage intergalactique pour sauver l'humanité.",
    posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 4.7
  }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTitle, setSearchTitle] = useState('');
  const [minRating, setMinRating] = useState(0);

  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filtered = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      m.rating >= minRating
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h1>🎬 Ma Collection de Films</h1>
      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        minRating={minRating}
        setMinRating={setMinRating}
      />
      <AddMovie onAdd={handleAdd} />
      <MovieList movies={filtered} />
    </div>
  );
}

export default App;
