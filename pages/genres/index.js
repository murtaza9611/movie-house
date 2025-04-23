import data from '../../data/movies.json';

export async function getServerSideProps() {
  return { props: { genres: data.genres } };
}

export default function Genres({ genres }) {
  return (
    <div>
      <h1>Genres</h1>
      {genres.map(genre => (
        <div key={genre.id}>
          <h3>{genre.name}</h3>
        </div>
      ))}
    </div>
  );
}
