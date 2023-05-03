const express =require('express');
const app =express();
const cors =require('cors');
const port =process.env.PORT || 5000;
const chefs= require('./chefs-data/chefs.json');

app.use(cors());
app.get('/', (req, res) =>{
    res.send('Khabar ghor is running')
});

app.get('/chefs',(req,res)=>{
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`khabar ghor api is running on port:${port}`)
})