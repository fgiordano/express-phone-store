'use strict';
require("dotenv").config();

const mongoose = require('mongoose');
const dbName = 'phone-store';

// connect to the database
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect(`mongodb://localhost/${dbName}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {  
  console.log(`Connected to the ${dbName} database`);
});