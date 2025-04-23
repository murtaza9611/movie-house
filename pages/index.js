import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import data from '../data/movies.json';

export async function getStaticProps() {
  const trendingMovies = data.movies.slice(0, 3);
  return {
    props: { trendingMovies },
    revalidate: 10,
  };
}

export default function Home({ trendingMovies }) {
  const router = useRouter();

  return (
    <div>
      <h1>Trending Movies</h1>
      {trendingMovies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
      <button onClick={() => router.push('/genres')}>Browse Genres</button>
    </div>
  );
}
