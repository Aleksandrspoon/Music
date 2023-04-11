import React, { useState, useEffect } from 'react';
import '../css/Main.css';
import SongList from './SongList';
import Left from '../left';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="Main">
      {isLoading ? (
        <div className="skeleton">
          {/* здесь можно добавить скелетон для страницы */}
        </div>
      ) : (
        <>
          <Left />
          <SongList />
        </>
      )}
    </div>
  );
}

export default Main;