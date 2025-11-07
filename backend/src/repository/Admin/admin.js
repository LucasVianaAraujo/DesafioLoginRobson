import { connection } from "../../db.js";

export async function LogAdmin(body) {
    let [results] = await connection.query(`
        insert into register(name, email, password)
        values
        (?,?,MD5(?))
        `, [body.name, body.email, body.password])
    return results
}