const express=require('express');
const bodyParser=require('body-parser');
const userRoutes=require('./routes/userRoutes');

const app=express();

app.use(bodyParser.json());
app.use('/api/users',userRoutes);

const PORT=3000;
app.listen(PORT,()=>
{
    console.log(`Serverul merge pe http://localhost:${PORT}`);
});