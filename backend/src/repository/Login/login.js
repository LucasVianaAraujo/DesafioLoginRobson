import { connection } from "../../db.js";

export async function VerifyInformation(body) {
    let [results] = await connection.query(`
        select id
        from login
        where email = ?
        and password = MD5(?)
        `, [body.email, body.password])
    return results
}