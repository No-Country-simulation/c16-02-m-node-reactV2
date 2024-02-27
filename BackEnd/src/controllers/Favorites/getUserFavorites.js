const { User } = require("../../db");

const getUserFavorites = async (req, res) => {
    const userId = req.params.id;

    try {
        // Buscar el usuario por su ID en la base de datos
        const user = await User.findByPk(userId);

        // Verificar si el usuario fue encontrado
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Si la lista de favoritos es null, devolver un array vacío
        const favorites = user.favoritos || [];

        // Responder con la lista de favoritos del usuario
        res.status(200).json(favorites);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al obtener los favoritos del usuario" });
    }
};

module.exports = getUserFavorites;
