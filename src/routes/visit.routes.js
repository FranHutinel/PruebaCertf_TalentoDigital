import express from 'express';
import { renderPostInventory, renderMantenedor, agregarPost, eliminarPost, 
    eliminarCategoriaporNombre, renderPostActualizador, renderCategoriaActualizador,  renderBody, renderPublicaciones, renderDogs, renderCats, renderProfile, renderLogin} from '../controllers/views.controller.js';


const router = express.Router();

// Ruta para renderizar el inventario de posts
router.get('/', renderPostInventory);

// Rutas del mantenedor

router.get('/mantenedor', renderMantenedor);
// Ruta para agregar un nuevo post
router.post('/añadir', agregarPost);

router.get('/eliminar/:id', eliminarPost)
router.get('/eliminar_categoria/:nombre_categoria', eliminarCategoriaporNombre)


// Rutas para actualizar
router.get("/actualizar/:id", renderPostActualizador);
router.get('/actualizar_categoria/:nombre_categoria', renderCategoriaActualizador);

router.get('/body', renderBody);

router.get('/bpublicaciones', renderPublicaciones);

router.get('/cats', renderCats);

router.get('/dogs', renderDogs);

router.get('/profile', renderProfile);

router.get('/login', renderLogin);

export default router;