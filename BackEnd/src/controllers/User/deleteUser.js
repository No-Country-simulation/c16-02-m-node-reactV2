// controllers/userController.js
const { User } = require("../../db");

const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        // Buscar el usuario por su ID en la base de datos
        const user = await User.findByPk(userId);

        // Verificar si el usuario fue encontrado
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Establecer el campo eliminado en true
        user.eliminado = true;
        await user.save();

        // Responder con el usuario marcado como eliminado
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al eliminar el usuario" });
    }
};

module.exports = deleteUser;
