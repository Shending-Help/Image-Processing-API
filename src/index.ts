import express from 'express';

const app = express();
const port = 3000;

const myFunc = (num: number): number => {
    return num * num;
  };
  
  export default myFunc;

app.get('/api', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
});  