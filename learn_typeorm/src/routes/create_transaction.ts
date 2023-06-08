import express from "express";
import { Client } from "src/entities/Client";
import { Transaction, TransactionTypes } from "src/entities/Transaction";

const router = express.Router();

router.post("/api/client/:clientId/transaction", async (req, res) => {
    const { clientId } = req.params;

    const { type, amount } = req.body;

    const client = await Client.findOne({ where: { id: parseInt(clientId)}})

    if (!client){
        return res.json({
            msg: "client not found"
        })
    }

    const transaction = Transaction.create({
        amount,
        type,
        client
    })

    await transaction.save()

    if (type === TransactionTypes.DEPOSIT) {
        client.balance = client.balance + amount
    } else if (type === TransactionTypes.WITHDRAWAL) {
        client.balance = client.balance - amount
    }

    await client.save();

    return res.json({
        msg: "transaction successful"
    })

})

export { router as createTransactionRouter }