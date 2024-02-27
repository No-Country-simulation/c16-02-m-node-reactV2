// controllers/userController.js
const { User } = require("../../db");

const getAllUsers = async (req, res) => {
    try {
        // Buscar todos los usuarios que no han sido eliminados en la base de datos
        const users = await User.findAll({
            where: {
                eliminado: false
            }
        });

        // Responder con los usuarios encontrados
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al buscar usuarios" });
    }
};

module.exports = getAllUsers;
