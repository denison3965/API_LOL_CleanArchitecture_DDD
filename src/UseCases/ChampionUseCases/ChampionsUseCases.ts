import { getCustomRepository } from "typeorm"
import { ChampionRepository } from '../../repositories/ChampionRepository'

class ChampionUseCases 
{
    async execute()
    {

        const championReporitory = getCustomRepository(ChampionRepository);

        const champions = await championReporitory.find();

        return champions;
    }
}

export { ChampionUseCases }