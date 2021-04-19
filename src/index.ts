import express from 'express';
import { router } from './routes'
import "reflect-metadata";
import './database/connect'

const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(3334, () => console.log('Server is runnig in http:localhost:3334'));
