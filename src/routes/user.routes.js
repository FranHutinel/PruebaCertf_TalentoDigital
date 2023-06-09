import express from 'express';
import {
  getAllUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from '../controllers/user.controller.js';

const router = express.Router();

// GET /api/v1/usuarios
router.get('/api/v1/usuarios', getAllUsuarios);

// POST /api/v1/usuarios
router.post('/api/v1/usuarios', createUsuario);

// PUT /api/v1/usuarios/:id
router.put('/api/v1/usuarios/:id', updateUsuario);

// DELETE /api/v1/usuarios/:id
router.delete('/api/v1/usuarios/:id', deleteUsuario);

export default router;
