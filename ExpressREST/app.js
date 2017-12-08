const express = require('express');
const morgan = require('morgan');
const contactsRouter = require('./routes/contact');
const notFound = require('./middlewares/not-found');
const app = express();

app.use(morgan('combined'));
app.use('/api/contacts', contactsRouter);

// 404 Middleware
app.use('/api', notFound);

module.exports = app;

// index -> app
