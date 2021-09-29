import express from 'express';;
import data from './data.js';

const app = express();

app.get('/api/produtos',(req, res) =>{
    res.send(data.produtos);
})

app.get('/',(req,res)=>{
    res.send('Server esta rodando');
});

const port  = process.env.PORT || 5000;
app.listen(5000,()=>{
    console.log(`Server em => http://localhost:${port}`);
});