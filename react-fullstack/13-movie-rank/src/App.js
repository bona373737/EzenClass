import React from 'react';
import MovieRank from './pages/MovieRank';

const App = () => {
  return (
    <div>
      <MovieRank/>
    </div>
  );
};

export default React.memo(App); 