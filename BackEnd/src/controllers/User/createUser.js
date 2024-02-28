const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../db");

const createUser = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      email,
      password,
      favoritos,
    } = req.body;

    // Validaciones
    if (!nombre || !apellido || !email || !password) { 
      throw new Error("El nombre, apellido, correo electrónico y contraseña son obligatorios");
    }

    const userExists = await User.findOne({
      where: {
        email,
      },
    });
    if (userExists) {
      throw new Error("Ya existe un usuario con este correo electrónico");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      id: uuidv4(),
      nombre,
      apellido,
      email,
      password: hashedPassword,
      favoritos,
    });

    const token = jwt.sign(
      {
        userId: newUser.id,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // El token expira en 1 hora
    );

    res.status(201).json({ user: newUser, token });
    
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: error.message || "Error al crear el usuario" });
  }
};

module.exports = createUser;
