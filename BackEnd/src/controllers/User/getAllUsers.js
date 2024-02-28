// controllers/userController.js
const { User } = require("../../db");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                eliminado: false
            }
        });

        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al buscar usuarios" });
    }
};

module.exports = getAllUsers;
