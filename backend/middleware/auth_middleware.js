const jwt = require('jsonwebtoken')

async function signToken(id, username, email) {
    const token = jwt.sign(
        {
            id: id,
            username: username,
            email: email
        },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    )
    return token
}

module.exports = { signToken }