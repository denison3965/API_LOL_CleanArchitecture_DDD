import { Request, Response} from 'express'
import { ChampionUseCases } from './ChampionsUseCases'

class ChampionsController {

    private championUseCases: ChampionUseCases;

    constructor(championUseCases: ChampionUseCases)
    {
        this.championUseCases = championUseCases;
    }

    async list(request:Request, response:Response)
    {
         try
         {
            let champions = await this.championUseCases.execute();

            response.status(200).json(champions);
         }
         catch(err)
         {
             console.log(err)
             response.status(400).json({
                 message : err.message || "Error Unexpected"
             })
         }
    }
}

export { ChampionsController }