import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import ConnectDB from './config/db.js'

import productsRoutes from "./routes/productsRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import { errorHandler, notFound } from './middleware/errroMiddleware.js';

const port = process.env.PORT || 5000;

ConnectDB()

const app = express();

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Cookie Parser middleware
app.use(cookieParser())

app.get('/',(req,res) => {
    res.send('API is running...');
})

app.use('/api/products',productsRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

app.use('/api/upload',uploadRoutes)

app.get('/api/config/paypal',(req,res)=>res.send({clientId: process.env.PAYPAL_CLIENT_ID}))

const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use(notFound)
app.use(errorHandler)

app.listen(port,() => console.log(`Server running on port ${port}`))