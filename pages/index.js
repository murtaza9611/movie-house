import { useRouter } from 'next/router';
import data from '../data/movies.json';  // Importing the movie data
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export async function getStaticProps() {
  const trendingMovies = data.movies.slice(0, 3); // Get the first 3 movies as trending
  return {
    props: { trendingMovies },
    revalidate: 10, // ISR (Incremental Static Regeneration)
  };
}

export default function Home({ trendingMovies }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Welcome to Movie House</h1>
      
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#000',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          border: 'none',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <div>
        <h2>Trending Movies</h2>
        {trendingMovies.map(movie => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
