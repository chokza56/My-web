const { pool } = require("./conn");
// login
async function login(username, password) {
    let conn = await pool.getConnection();
    try {
        const [result] = await conn.query(
            "SELECT * FROM users   WHERE username = ? AND password = ?",
            [username, password]
        );

        return result[0] || null;
    } finally {
        conn.release();
    }
}
// เพิ่ม User
async function register(username, password, email, address) {
    let conn = await pool.getConnection();
    try {
        const [result] = await conn.query(
            "INSERT INTO users (username, password, email, address) VALUES (?, ?, ?, ?)",
            [username, password, email, address]
        );

        return result.insertId;
    } finally {
        conn.release();
    }
}
// แก้ไข User
async function edituser(user_id, username, password, email, address) {
    let conn = await pool.getConnection();

    try {
        const [result] = await conn.query(
            "UPDATE users SET username = ?, password = ?, email = ?, address = ? WHERE user_id = ?",
            [username, password, email, address, user_id]
        );
        return result;
    } finally {
        conn.release();
    }
}
// ลบ User
async function deleteuser(user_id) {
    let conn = await pool.getConnection();

    try {
        const [result] = await conn.query(
            "DELETE FROM users WHERE user_id = ?",
            [user_id]
        );
        return result;
    } finally {
        conn.release();
    }
}

module.exports = {
    login,
    register,
    edituser,
    deleteuser
};