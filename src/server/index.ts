import { config } from 'dotenv';
import express from 'express';
import ViteExpress from 'vite-express';
import routes from './routes';

config();

const PORT = Number(process.env.PORT || 3000);
const app = express();
app.use(express.json());

app.use('/api', routes);

ViteExpress.listen(app, PORT, () => {
  console.log('\nDev Server is running: \x1b[1m\x1b[34m%s\x1b[0m\n', `http://localhost:${PORT}`);
});
