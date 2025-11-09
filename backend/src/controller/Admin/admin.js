import * as repo from '../../repository/Admin/admin.js'
import { Router } from "express";
import { generateToken, getAuthentication } from "../../utils/jwt.js";

const auth = getAuthentication();

const endpoint = Router()

endpoint.post('/admin', async (req, resp) => {
    const body = req.body

    const awnser = await repo.LogAdmin(body)

    if (awnser.length == 0) {
        return resp.status(401).send({
            erro: 'ID não encontrado'
        })
    }

    resp.send({
        'AdminFound': generateToken({ email: awnser.email })
    })
})

export default endpoint