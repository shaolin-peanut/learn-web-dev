import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Client } from "./Client";

export enum TransationTypes {
    DEPOSIT = 'deposit',
    WITHDRAWAL = 'withdraw'
}

@Entity("transactions")
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransationTypes
    })
    type: string;

    @Column({
        type: "numeric"
    })
    amount: number;

    @ManyToOne(
        () => Client,
        client => client.transactions
    )
    @JoinColumn({
        name: 'client_id'
    })
    client: Client;
}