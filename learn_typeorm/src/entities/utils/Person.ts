import {Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity('person')
export class Person extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        unique: true
    })
    email:  string;

    @Column({
        type: "numeric"
    })
    balance: number;
}