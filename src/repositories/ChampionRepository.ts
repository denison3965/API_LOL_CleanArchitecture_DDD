import { EntityRepository, Repository } from 'typeorm'
import { Champion } from '../entitys/Champion'

@EntityRepository(Champion)
class ChampionRepository extends Repository<Champion> {

}

export { ChampionRepository }