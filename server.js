import express from 'express'

const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world again!")
})
app.get('/login', (req, res) => {
    res.send("<h1>Congrats you have successfully Loged In! </h1>")
})

app.listen(port, () => {
    console.log(`Example code runing at ${port}`)
})