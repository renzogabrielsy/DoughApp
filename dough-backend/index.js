const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3001;


mongoose.connect('mongodb://localhost:27017/doughDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`DoughApp listening on port ${port}`)
})