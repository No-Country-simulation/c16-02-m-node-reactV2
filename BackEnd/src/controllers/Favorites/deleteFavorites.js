const { User } = require("../../db");

const removeFavorite = async (req, res) => {
    const userId = req.params.id;
    const eventId = req.body.eventId;

    try {
        let user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        const eventIndex = user.favoritos.indexOf(eventId);
        if (eventIndex === -1) {
            return res.status(400).json({ msg: "El evento no está en la lista de favoritos del usuario" });
        }

        // Crear un nuevo array de favoritos que excluya el evento a eliminar
        const newFavorites = user.favoritos.filter(event => event !== eventId);

        user.favoritos = newFavorites;


        await user.save();

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al eliminar el favorito del usuario" });
    }
};

module.exports = removeFavorite;
