import express from 'express'
import bodyParser = require("body-parser");
import swaggerUi from 'swagger-ui-express';
import swagger from './swagger_output.json';
import {getItem} from './routes/get'
import {deleteItem} from './routes/delete'


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

//routers for express routing
app.use(getItem)
app.use(deleteItem)


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swagger))


export default app