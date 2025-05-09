import data from '../../../data/movies.json';

export default function handler(req, res) {
  const { id } = req.query;
  const genreMovies = data.movies.filter(m => m.genreId === id);

  if (req.method === 'GET') {
    if (genreMovies.length > 0) {
      res.status(200).json(genreMovies); // Return movies by genre
    } else {
      res.status(404).json({ message: 'No movies found for this genre' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
