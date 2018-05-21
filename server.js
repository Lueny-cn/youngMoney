import express from 'express'
import opn from 'opn'

let app = express();

app.get('/',(req, res) => {
  res.send(`Hello word, ${port}`)
})

app.get('/you',(req, res) => {
  res.send(`Hello lwy, ${port}`)
})

app.get('/me',(req, res) => {
  res.send(`Hello hhh, ${port}`)
})

let port = 8089;
app.listen(port, ()=>{
  console.log(`server running http://localhost:${port}`);
  opn(`http://localhost:${port}`)
})