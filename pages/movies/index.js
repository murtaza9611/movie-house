import Link from 'next/link';
import data from '../../data/movies.json';

export async function getStaticProps() {
  return {
    props: { movies: data.movies, genres: data.genres },
    revalidate: 10,
  };
}

export default function Movies({ movies }) {
  return (
    <div>
      <h1>All Movies</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}
