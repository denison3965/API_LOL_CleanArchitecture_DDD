import { Router, Request, Response } from 'express'

//Importing Controllers
import { championsController } from './UseCases/ChampionUseCases' 

const router = Router();

router.get('/champions', (request:Request, response:Response) => {
    return championsController.list(request, response);
})


export  { router }