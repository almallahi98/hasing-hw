import express from 'express';
import { router } from './routes/Main.router';

const app=express();
app.use(express.json());
app.use('/api/v1/users',router);

app.listen(5000,()=>{
    console.log("Server is runnung on port 5000");
    
});