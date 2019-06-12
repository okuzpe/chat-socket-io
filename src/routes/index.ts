
import express = require('express');
// Routes
import loginRouter from './login'

const routes = express.Router();

//Controller
routes.use('/',loginRouter)

export default routes;