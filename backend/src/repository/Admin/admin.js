import { connection } from "../../db.js";

export async function LogAdmin(body) {
    let [results] = await connection.query(`
        select email as email
        from admin
        where email = ?
        and password = MD5(?)
        `, [body.email, body.password])
    return results
}