const express = require("express");
const { MongoClient } = require("mongodb");
require('dotenv').config();

const app = express();
const uri = `mongodb+srv://diorrw:${process.env.password}@mongoose-tut.pvextla.mongodb.net/`;
const PORT = 3000;
const client = new MongoClient(uri);

//Connect to DB

app.use('/posts', () => {
    console.log('This is a middleware running')
})

app.get('/', (req, res) => {
    res.send("Whats up dude")
})


app.get('/posts', (req, res) => {
    res.send("We're on posts")
})

app.listen((PORT), () => {
    console.log("Listening on port: " + PORT);
})

async function run() {
    try {
      const database = client.db('sample_mflix');
      const movies = database.collection('movies');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);