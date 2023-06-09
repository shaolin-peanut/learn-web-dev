import express from "express";
import { Client } from "../entities/Client";

const router = express.Router()

router.get('/api/clients', async (req, res) => {
    const client = await Client.find()

    return res.json(client)
})

export { router as fetchClientRouter }
