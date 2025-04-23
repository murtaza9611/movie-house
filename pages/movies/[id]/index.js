import data from '../../../data/movies.json';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = data.movies.map(movie => ({
    params: { id: movie.id },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const movie = data.movies.find(m => m.id === params.id);
  if (!movie) {
    return { notFound: true };
  }
  return { props: { movie }, revalidate: 10 };
}

export default function MovieDetails({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
      <Link href={`/movies/${movie.id}/director`}>Director Info</Link>
    </div>
  );
}
