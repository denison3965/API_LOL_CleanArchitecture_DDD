import { Column, Entity, PrimaryColumn } from 'typeorm'



@Entity('champions')
class Champion {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img_champion: string;

    @Column()
    function: string;

    @Column()
    passive: string;

    @Column()
    img_passive: string;

    @Column()
    Q: string;

    @Column()
    Q_img: string;

    @Column()
    W: string;

    @Column()
    W_img: string;

    @Column()
    E: string;

    @Column()
    E_img: string;
    
    @Column()
    R: string;

    @Column()
    R_img: string;

}

export { Champion }