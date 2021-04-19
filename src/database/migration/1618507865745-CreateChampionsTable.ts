import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChampionsTable1618507865745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'champions',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    unsigned: true,
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'img_champion',
                    type: 'varchar',
                },
                {
                    name: 'function',
                    type: 'varchar',
                },
                {
                    name: 'passive',
                    type: 'varchar',
                },
                {
                    name: 'img_passive',
                    type: 'varchar',
                },
                {
                    name: 'Q',
                    type: 'varchar',
                },
                {
                    name: 'Q_img',
                    type: 'varchar',
                },
                {
                    name: 'W',
                    type: 'varchar',
                },
                {
                    name: 'W_img',
                    type: 'varchar',
                },
                {
                    name: 'E',
                    type: 'varchar',
                },
                {
                    name: 'E_img',
                    type: 'varchar',
                },
                {
                    name: 'R',
                    type: 'varchar',
                },
                {
                    name: 'R_img',
                    type: 'varchar',
                },
            ],
        }));
        
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Kaisa",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
                    function: "Atirador",
                    passive: "SEGUNDA PELE",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/Kaisa_Passive.png",
                    Q: "CHUVA ICATHIANA",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/KaisaQ.png",
                    W: "EXPLORADORA DO VAZIO",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/KaisaW.png",
                    E: "SOBRECARGA",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.8.1/img/spell/KaisaE.png",    
                    R: "INSTINTO ASSASSINO",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/KaisaR.png",
        
                }
            ]).execute()

        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Viego",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",
                    function: "Lutador",
                    passive: "DOMINAÇÃO MONÁRQUICA",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/Viego_Passive.RuinedKing.png",
                    Q: "ESPADA DO REI DESTRUÍDO",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ViegoQ.png",
                    W: "POSSE ESPECTRAL",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ViegoW.png",
                    E: "DOMÍNIO ATORMENTADO",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ViegoE.png",    
                    R: "DESTRUIDOR DE CORAÇÕES",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ViegoR.png",
        
                }
            ]).execute()

            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Azir",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
                    function: "Mago",
                    passive: "LEGADO DE SHURIMA",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/Azir_Passive.png",
                    Q: "AREIAS DA CONQUISTA",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AzirQWrapper.png",
                    W: "SURJA!",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AzirW.png",
                    E: "AREIAS OSCILANTES",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AzirEWrapper.png",    
                    R: "DECRETO DO IMPERADOR",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AzirR.png",

                }
            ]).execute()

            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Akali",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
                    function: "Assassino",
                    passive: "MARCA DO ASSASSINO",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/Akali_P.png",
                    Q: "GOLPE DOS CINCO PONTOS",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AkaliQ.png",
                    W: "PROTEÇÃO DO CREPÚSCULO",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AkaliW.png",
                    E: "INVESTIDA SHURIKEN",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AkaliE.png",    
                    R: "EXECUÇÃO PERFEITA",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/AkaliR.png",

                }
            ]).execute()


            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Thresh",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
                    function: "Suporte",
                    passive: "CONDENAÇÃO",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/Thresh_Passive.png",
                    Q: "SENTENÇA",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ThreshQ.png",
                    W: "PASSAGEM SOMBRIA",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ThreshW.png",
                    E: "ESFOLAR",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ThreshE.png",    
                    R: "A CAIXA",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ThreshRPenta.png",

                }
            ]).execute()


            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Zed",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
                    function: "Assassino",
                    passive: "DESPREZO PELOS FRACOS",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/shadowninja_P.png",
                    Q: "SHURIKEN LAMINADO",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ZedQ.png",
                    W: "SOMBRA VIVA",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ZedW.png",
                    E: "CORTE SOMBRIO",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ZedE.png",    
                    R: "MARCA FATAL",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/ZedR.png",

                }
            ]).execute()

            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Fiora",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
                    function: "Lutadora",
                    passive: "DANÇA DA DUELISTA",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/Fiora_P.png",
                    Q: "ESTOCADA",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FioraQ.png",
                    W: "RIPOSTAR",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FioraW.png",
                    E: "ESGRIMA",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FioraE.png",    
                    R: "DESAFIO GRANDIOSO",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FioraR.png",

                }
            ]).execute()

            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Darius",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
                    function: "Lutador",
                    passive: "HEMORRAGIA",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/Darius_Icon_Hemorrhage.png",
                    Q: "DIZIMAR",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/DariusCleave.png",
                    W: "ATAQUE MUTILADOR",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/DariusNoxianTacticsONH.png",
                    E: "APREENDER",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/DariusAxeGrabCone.png",    
                    R: "GUILHOTINA DE NOXUS",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/DariusExecute.png",

                }
            ]).execute()


            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Xayah",
                    img_champion: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg",
                    function: "Atirador",
                    passive: "CORTES CERTEIROS",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.8.1/img/passive/XayahPassive.png",
                    Q: "PUNHAIS DUPLOS",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/XayahQ.png",
                    W: "PLUMAGEM MORTÍFERA",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/XayahW.png",
                    E: "INVOCADORA DAS LÂMINAS",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/XayahE.png",    
                    R: "TEMPESTADE DE PLUMAS",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/XayahR.png",

                }
            ]).execute()


            await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('champions')
            .values([
                {
                    name: "Fiddlesticks",
                    img_champion: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb8fadbe73cf1c228/5e7a8d419da207172a2c439f/Ask_Riot_Fiddlesticks.jpg",
                    function: "Mago",
                    passive: "UM ESPANTALHO INOFENSIVO",
                    img_passive: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/FiddleSticks_Passive.png",
                    Q: "ATERRORIZAR",
                    Q_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FiddleSticksQ.png",
                    W: "COLHEITA FARTA",
                    W_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FiddleSticksW.png",
                    E: "CEIFAR",
                    E_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FiddleSticksE.png",    
                    R: "TEMPESTADE DE CORVOS",
                    R_img: "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/FiddleSticksR.png",

                }
            ]).execute()

            
        }
        
        
        public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('champions')
        }


}
