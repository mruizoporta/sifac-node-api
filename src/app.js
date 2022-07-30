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
import companyRoutes from './routes/company.js';
import companyAccountRoutes from './routes/companyaccount.js';
import categoryRoutes from './routes/category.js';
import brandRoutes from './routes/brand.js';
import personRoutes from './routes/person.js';
import contactRoutes from './routes/contact';

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
app.use('/api/company', companyRoutes);
app.use('/api/companyaccount', companyAccountRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/brand', brandRoutes);
app.use('/api/person', personRoutes);
app.use('/api/contact', contactRoutes);

export default app;