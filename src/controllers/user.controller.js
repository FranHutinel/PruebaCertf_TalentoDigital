import { Usuario } from '../models/user.model.js';

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

const createUsuario = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const usuario = await Usuario.create({ nombre, email, password });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, password } = req.body;
    await Usuario.update({ nombre, email, password }, { where: { id } });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.destroy({ where: { id } });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

export { getAllUsuarios, createUsuario, updateUsuario, deleteUsuario };
