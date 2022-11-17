import express from 'express'
import { getCats } from '../services/database.service';

const router = express.Router()

export function catRouter(){

    router.get('/cats/:amount?', async(req, res, next) => {

        const cats = await getCats()

        res.status(418).json(cats);   
    })

    router.get('/cat/:id', async(req, res, next) => {


    })

    return router
}