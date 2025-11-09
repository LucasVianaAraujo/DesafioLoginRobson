import * as repo from '../../repository/Login/login.js'
import { Router } from "express";
import { getAuthentication, generateToken } from "../../utils/jwt.js";

const auth = getAuthentication();

const endpoint = Router()

endpoint.post('/login', async (req, resp) => {
    try {
        const body = req.body;

        const awnser = await repo.VerifyInformation(body)

        if (awnser.length == 0 ) {
            return resp.status(401).send({
                erro: 'ID não recebido'
            })
        }

        resp.send({
            'Token': generateToken({ id: awnser.id })
        })
    }

    catch (err) {
        console.log(err)
        return
    }
})

export default endpoint