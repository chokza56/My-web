const model = require("../model/auth_model")
const jwt = require("../middleware/auth_middleware")


exports.login = async (req, res) => {
    const { username, password } = req.body
console.log("login request:", req.body)
    try {
        const result = await model.login(username, password)
        if (!result) {return res.status(400).json({message: "Invalid username or password"}) 
        }
        const token = await jwt.signToken(result.id, result.username, result.email)
        if (!token) { return res.status(401).json({message: "Authentication failed"})
        }
        res.status(200)
        .json({message: "Login success",Authorization: token})    
    } catch (err) {
        console.error("error login:");
        res.status(400).json({message: "request error"})
    }
};

exports.register = async (req, res) => {
    const { username, password, email, address } = req.body
    try {
        const result = await model.register(username, password, email,address)
        if(!result) return res.status(400).json({message: "register failed"})
        res.status(200).json({message: "Register successful"})
    } catch (err) {
        console.error("error register:", err);
        res.status(500).json({message: "request error" })
    }
};

exports.edituser = async (req, res) => {
    const { id } = req.params
    const { username, password, email, address } = req.body
    try {
        const result = await model.edituser(
            id,
            username,
            password,
            email,
            address
        )
        if (result.affectedRows === 0) {
            return res.status(404).json({message: "User not found"})          
        }
        res.status(200).json({message: "User updated successfully" })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
exports.deleteuser = async (req, res) => {
    const { id } = req.params
    try {
        const result = await model.deleteuser(id)
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found"})
        }
        res.status(200).json({message: "User deleted successfully"})        
    } catch (error) {
        res.status(500).json({message: error.message})
    }      
}
