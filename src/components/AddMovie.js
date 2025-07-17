import React, { useState } from 'react';

function AddMovie({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc && poster && rating) {
      onAdd({
        title,
        description: desc,
        posterURL: poster,
        rating: Number(rating)
      });
      setTitle('');
      setDesc('');
      setPoster('');
      setRating('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} required />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} required />
      <input placeholder="URL de l’affiche" value={poster} onChange={e => setPoster(e.target.value)} required />
      <input type="number" placeholder="Note" value={rating} onChange={e => setRating(e.target.value)} required min="0" max="5" step="0.1" />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddMovie;
