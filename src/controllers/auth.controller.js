import { Usuario } from '../models/user.model.js';
import bcrypt from 'bcrypt';


export const register = async (req, res) => {
    try {
      const { nombre, email, password } = req.body;
  
      // Comprueba si el correo electrónico ya está registrado
      const existingUser = await Usuario.findOne({ where: { email } });
  
      if (existingUser) {
        return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
      }
  
      // Cifrar la contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Crear el usuario
      const newUser = await Usuario.create({
        nombre,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json({ message: 'Registro completado', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Error en el registro', error });
    }
};