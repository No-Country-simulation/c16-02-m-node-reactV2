// controllers/userController.js
const { User } = require("../../db");

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    try {
        // Buscar el usuario por su ID en la base de datos
        let user = await User.findByPk(userId);

        // Verificar si el usuario fue encontrado
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Actualizar los campos del usuario con los nuevos datos
        user.nombre = userData.nombre || user.nombre;
        user.email = userData.email || user.email;
        // Actualiza otros campos según sea necesario

        // Guardar los cambios en la base de datos
        await user.save();

        // Responder con el usuario actualizado
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al actualizar el usuario" });
    }
};

module.exports = updateUser;
