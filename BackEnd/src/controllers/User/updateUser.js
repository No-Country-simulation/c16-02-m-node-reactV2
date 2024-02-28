const { User } = require("../../db");

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;

    try {
        let user = await User.findByPk(userId);

        // Verificar si el usuario fue encontrado
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Actualizar los campos del usuario con los nuevos datos
        user.nombre = userData.nombre || user.nombre;
        user.apellido = userData.apellido || user.apellido;
        user.email = userData.email || user.email;

        await user.save();

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al actualizar el usuario" });
    }
};

module.exports = updateUser;
