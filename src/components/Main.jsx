import { useState } from 'react';
import '../css/Main.css';
import SongList from './SongList';
import FilterMenu from '../components/left';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  (() => {
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
          <FilterMenu />
          <SongList />
        </>
      )}
    </div>
  );
}

export default Main;
