import * as repo from '../../repository/Login/login.js'
import { Router } from "express";
import { getAuthentication, generateToken } from "../../utils/jwt.js";

const auth = getAuthentication();

const endpoint = Router()

endpoint.post('/login', async (req, resp) => {
    try {
        const body = req.body;

        const awnser = await repo.VerifyInformation(body)

        resp.send({
            'Token': generateToken({ id: awnser.insertId })
        })
    }

    catch (err) {
        console.log(err)
        return
    }
})

export default endpoint