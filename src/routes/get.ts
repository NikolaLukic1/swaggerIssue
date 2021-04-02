import express from 'express';
import { Controller } from '../controller/Controller'

const router = express.Router();

const controller : Controller = Controller.getInstance()

router.get(
    '/item',
    /*
    #swagger.description = 'Returns all the states of the jobs.' 
    #swagger.tags = ['Get endpoints']

    #swagger.responses[200] = { 
    schema: { "$ref": "#/definitions/GetItemSummary" },
    description: "Get item summary response" } */
    controller.getItem   
)

export { router as getItem };