const express = require('express');
const dbConnect = require('./db/connectDB');
const productRoutes = require('./routes/productRoute');
require('dotenv').config();
const notFound = require('./middleware/not-found');

const server = express();

// middleware setup
server.use(express.json());

// home route
server.get('/', (req,res) => {
    res.send('Welcome to MERN Product Store Application');
})

// API route setup
server.use('/api/v1/products', productRoutes);

server.use(notFound);

const portNo = process.env.PORT || 7272

const start = async () => {
    try {
        await dbConnect(process.env.mongoURL)
        .then(() => console.log('DB Connected'))
        server.listen(portNo, () => {
            console.log(`Server running on port: ${portNo}...`);
        })
    } catch (error) {
        console.log('Error connecting to DB',error);
    }
}

start();
