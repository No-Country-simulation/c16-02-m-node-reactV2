// controllers/userController.js
const { User } = require("../../db");

const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al buscar el usuario" });
    }
};

module.exports = getUserById;
