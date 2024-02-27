const { User } = require("../../db");

const removeFavorite = async (req, res) => {
    const userId = req.params.id;
    const eventId = req.body.eventId;
    console.log("user", userId)
    console.log("event", eventId);

    try {
        // Buscar el usuario por su ID en la base de datos
        let user = await User.findByPk(userId);

        // Verificar si el usuario fue encontrado
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Verificar si el evento está en la lista de favoritos del usuario
        const index = user.favoritos.indexOf(eventId);
        if (index === -1) {
            return res.status(400).json({ msg: "El evento no está en la lista de favoritos del usuario" });
        }

        user.favoritos.splice(index, 1);

        await user.save();

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al eliminar el favorito del usuario" });
    }
};

module.exports = removeFavorite;
