import express from 'express'

let app = express();

app.get('/',(req, res) => {
  res.send(`Hello word, ${port}`)
})

let port = 8088;
app.listen(port, ()=>{
  console.log(`server running http://localhost:${port}`);
})