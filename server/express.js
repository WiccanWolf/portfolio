import express from 'express';
import cors from 'cors';
const app = express();

// routeHandler
// errorHandler
// apiRouter

app.use(cors());
app.use(express.json());
app.all('*' /*routeHandler*/);

module.exports = app;
