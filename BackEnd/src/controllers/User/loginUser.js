// controllers/userController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../db");

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }

        const payload = {
            user: {
                id: user.id,
                nombre: user.name, 
                apellido: user.apellido,
                favoritos: user.favoritos,
                email: user.email
                // Puedes incluir más datos del usuario en el token si lo deseas
            }
        };

        // Firmar el token
        jwt.sign(
            payload,
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }, 
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
