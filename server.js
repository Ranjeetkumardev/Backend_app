import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Hello world again!")
})
app.get('/login', (req, res) => {
    res.send("<h1>Congrats you have successfully Loged In! </h1>")
})
// middleware => bad practics 
//app.use(express.static('dist'));

app.get('/api/jokes', (req, res) => {
    const jokes = [
      {
        id: 1,
        title: "first joke ",
        content: "What month is the shortest of the year? ",
      },
      {
        id: 2,
        title: "second joke ",
        content: " How does an octopus go into battle",
      },
      {
        id: 3,
        title: "third joke ",
        content: "How do celebrities stay cool ",
      },
      {
        id: 4,
        title: "fourth joke ",
        content: "I tried to catch fog yesterday ",
      },
      {
        id: 5,
        title: "fifth joke",
        content: " If April showers bring May flowers",
      },
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})