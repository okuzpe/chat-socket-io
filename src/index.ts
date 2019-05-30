import express from 'express';
import path from 'path';

// Importing Routes
import IndexRoutes from './routes'
import blockAdan from './block_parents';
import { start as startBlockChain } from './start_blockchain';


const app=express();

app.set('port',process.env.port || 3000);

//Routes
// app.use('/',IndexRoutes);

startBlockChain()

app.listen(app.get('port'),()=>{
    console.log("----------Server Start-----------");
});