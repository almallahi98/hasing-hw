import express from 'express';
import { router } from './routes/Main.router';
import schoolRouter from './routes/school.router';

const app=express();
app.use(express.json());
app.use('/api/v1/users',router);
app.use('/api/v1/school',schoolRouter)
app.listen(5000,()=>{
    console.log("Server is runnung on port 5000");
    
});