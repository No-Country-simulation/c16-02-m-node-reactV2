// controllers/userController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../db");

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar el usuario por su correo electrónico en la base de datos
        const user = await User.findOne({ where: { email } });

        // Verificar si el usuario fue encontrado
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Verificar si la contraseña es correcta
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }

        // Generar el token de autenticación
        const payload = {
            user: {
                id: user.id,
                email: user.email
                // Puedes incluir más datos del usuario en el token si lo deseas
            }
        };

        // Firmar el token
        jwt.sign(
            payload,
            process.env.JWT_SECRET, // Debes definir JWT_SECRET en tu archivo .env
            { expiresIn: "1h" }, // El token expirará en 1 hora, puedes ajustar esto según tus necesidades
            (err, token) => {
                if (err) throw err;
                res.json({ token, user});
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al iniciar sesión" });
    }
};

module.exports = loginUser;
