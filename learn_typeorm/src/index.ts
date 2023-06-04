import  { createConnection } from "typeorm"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"
import { Transaction } from "./entities/Transaction"

const main = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "sbars",
            password: "sbars123",
            database: 'typeorm',
            entities: [Client, Banker, Transaction],
            synchronize: true
        })
        console.log('Connected to Postgres!')
    } catch (error) {
        console.error(error)
        throw new Error('Unable to connect to Postgres :/')
    }
}

main()