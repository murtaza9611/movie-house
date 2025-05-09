import data from '../../data/movies.json';

export default function handler(req, res) {
  const { id } = req.query;
  const director = data.directors.find(d => d.id === id);

  if (req.method === 'GET') {
    if (director) {
      res.status(200).json(director); // Return director details
    } else {
      res.status(404).json({ message: 'Director not found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
