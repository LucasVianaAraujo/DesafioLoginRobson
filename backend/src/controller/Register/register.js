import * as repo from '../../repository/Register/register.js'
import { Router } from "express";
import { getAuthentication, generateToken } from "../../utils/jwt.js";

const auth = getAuthentication();

const endpoint = Router()

endpoint.post('/register', async (req, resp) => {
    try {
        const body = req.body;

        const awnser = await repo.RegUser(body)

        resp.send({
            'Token': generateToken({ id: awnser })
        })
    }

    catch (err) {
        console.log(err)
        return
    }
})

endpoint.get('/count', async (req, resp) => {
    try {
        const awnser = await repo.CountUsers()
        resp.send({
            'Users': awnser
        })
    }

    catch (err) {
        console.log(err)
        return
    }
})

endpoint.get('/admin', async (req, resp) => {
    try {
        const awnser = await repo.CountAdmin()
        resp.send({
            'Admin': awnser
        })
    }

    catch (err) {
        console.log(err)
        return
    }
})

export default endpoint