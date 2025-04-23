import data from '../../../data/movies.json';

export async function getStaticPaths() {
  const paths = data.movies.map(movie => ({
    params: { id: movie.id },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const movie = data.movies.find(m => m.id === params.id);
  const director = data.directors.find(d => d.id === movie.directorId);
  return { props: { director }, revalidate: 10 };
}

export default function Director({ director }) {
  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.biography}</p>
    </div>
  );
}
