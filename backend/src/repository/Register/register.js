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

export async function CountUsers() {
    let [results] = await connection.query(`select count(id) as total from register`)
    return results[0]
}

export async function CountAdmin() {
    let [results] = await connection.query(`select count(email) as admin from admin`)
    return results[0]
}