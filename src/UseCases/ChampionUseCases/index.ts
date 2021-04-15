import { ChampionsController } from './ChampionsController'
import { ChampionUseCases } from './ChampionsUseCases'

const championUseCases = new ChampionUseCases();
const championsController = new ChampionsController(championUseCases);



export { championsController };