import useSWR from 'swr';
import data from '../../data/movies.json';

const fetcher = () => Promise.resolve(data.directors);

export default function Directors() {
  const { data: directors } = useSWR('directors', fetcher);

  return (
    <div>
      <h1>Directors</h1>
      {directors?.map(d => (
        <div key={d.id}>
          <h3>{d.name}</h3>
          <p>{d.biography}</p>
        </div>
      ))}
    </div>
  );
}
