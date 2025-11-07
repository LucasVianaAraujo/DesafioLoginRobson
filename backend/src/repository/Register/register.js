import { connection } from "../../db.js";

export async function RegUser(body) {
    let [results] = await connection.query(`
        insert into register(name, email, password)
        values
        (?,MD5(?),?)
        `, [body.name, body.email, body.password])

    let id = results.insertId;

    let [other] = await connection.query(`
        insert into login (id, email, password)
        values
        (?,?,MD5(?))
        `, [id, body.email, body.password])

    return results
}