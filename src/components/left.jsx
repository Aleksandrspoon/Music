import React, { useState } from 'react';

function FilterMenu() {
  const [artistOpen, setArtistOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);

  const handleArtistClick = () => {
    setArtistOpen(!artistOpen);
    setYearOpen(false);
    setGenreOpen(false);
  };

  const handleYearClick = () => {
    setYearOpen(!yearOpen);
    setArtistOpen(false);
    setGenreOpen(false);
  };

  const handleGenreClick = () => {
    setGenreOpen(!genreOpen);
    setArtistOpen(false);
    setYearOpen(false);
  };

  return (
    <div>
      <button className="artist-btn" onClick={handleArtistClick}>
        Исполнитель
      </button>
      {artistOpen && (
        <ul className="artist-list">
          <li>Исполнитель 1</li>
          <li>Исполнитель 2</li>
          <li>Исполнитель 3</li>
        </ul>
      )}
      <button className="year-btn" onClick={handleYearClick}>
        Год выпуска
      </button>
      {yearOpen && (
        <ul className="year-list">
          <li>2010</li>
          <li>2011</li>
          <li>2012</li>
        </ul>
      )}
      <button className="genre-btn" onClick={handleGenreClick}>
        Жанр
      </button>
      {genreOpen && (
        <ul className="genre-list">
          <li>Жанр 1</li>
          <li>Жанр 2</li>
          <li>Жанр 3</li>
        </ul>
      )}
    </div>
  );
}

export default FilterMenu;