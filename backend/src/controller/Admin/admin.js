import * as repo from '../../repository/Admin/admin.js'
import { Router } from "express";
import { getAuthentication } from "../../utils/jwt.js";

const auth = getAuthentication();

const endpoint = Router()

endpoint.post('/admin', async (req,resp) => {
    const awnser = await repo.LogAdmin()
    resp.send({

    })
})

export default endpoint