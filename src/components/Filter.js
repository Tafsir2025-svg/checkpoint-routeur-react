import React from 'react';

function Filter({ searchTitle, setSearchTitle, minRating, setMinRating }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <input
        type="number"
        placeholder="Note minimale"
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        min="0"
        max="5"
        step="0.1"
        style={{ padding: '0.5rem', width: '120px' }}
      />
    </div>
  );
}

export default Filter;
