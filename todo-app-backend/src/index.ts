import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import pgPromise from 'pg-promise';
var cors = require('cors')

const app = express();
app.use(cors());
const port = 3000;

// Create a PostgreSQL connection
const pgp = pgPromise();
const db = pgp('postgres://postgres:postgres@localhost:5432/todo_app');

app.use(bodyParser.json());

// Enable CORS (if needed)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Get all duties
app.get('/api/duties', async (req: Request, res: Response) => {
  try {
    const duties = await db.any('SELECT * FROM duties');
    res.json(duties);
    console.log("getting duties");
  } catch (error) {
    console.error('Error retrieving duties:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new duty
app.post('/api/duties', async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    await db.none('INSERT INTO duties (title) VALUES ($1)', [title]);
    res.sendStatus(201);
    console.log("creating duties");
  } catch (error) {
    console.error('Error creating duty:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a duty
app.delete('/api/duties/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.none('DELETE FROM duties WHERE id = $1', [id]);
    res.sendStatus(204);
    console.log("deleting duties");
  } catch (error) {
    console.error('Error deleting duty:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
