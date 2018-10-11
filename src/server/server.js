const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const memoController = require('./controllers/memoController.js');

require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/memos', memoController.getMemos);
app.post('/memos', memoController.addMemo);
// app.put('/edit', memoController.editMemo);
app.delete('/delete', memoController.deleteMemo);
app.use(express.static(__dirname + '/../../dist'));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log('Connected to database...');
})

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
})