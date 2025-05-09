import data from '../../data/movies.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data.movies); // Return all movies
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
