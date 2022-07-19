require('dotenv').config();

const Server = require('./config/server')
const server = new Server();

server.listen();

import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import catalogRoutes from './routes/catalog.js';
import catalogvalueRoutes from './routes/catalogvalue.js';
import cityRoutes from './routes/city.js';
import countryRoutes from './routes/country.js';

//probando
//Initialization
const app = express();

//middlewares
app.use(morgan('dev')); // muestra en consola lo que va llegando
app.use(json()); // encargado de comprender los json

//routes
app.use('/api/catalog', catalogRoutes);
app.use('/api/catalogvalue', catalogvalueRoutes);
app.use('/api/city', cityRoutes);
app.use('/api/country', countryRoutes);

export default app;