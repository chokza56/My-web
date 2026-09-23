const pool = require("../config/db");

async function withtx (work) {
    let conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        const result = await work(conn);
        await conn.commit();
        return result;
    }finally {
        conn.release();
    }
}

module.exports = { withtx, pool };
