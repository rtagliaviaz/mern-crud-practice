const express = require('express');
const cors = require('cors');

//initialize
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Index');
});

app.use('/api/notes', require('./routes/notes'))
app.use('/api/users', require('./routes/users'))


module.exports = app;