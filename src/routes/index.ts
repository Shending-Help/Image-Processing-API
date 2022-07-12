import processing from "./api/processing";
import express from 'express';  

const routes = express.Router();


routes.get('/', (req, res) => { 
    res.send('kosom main route');
});

routes.use('/processing', processing);

export default routes;