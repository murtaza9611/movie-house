import data from '../../data/movies.json';

export default function handler(req, res) {
  const { id } = req.query;
  const movie = data.movies.find(m => m.id === id);

  if (req.method === 'GET') {
    if (movie) {
      res.status(200).json(movie); // Return movie details
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
