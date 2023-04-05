import { Post } from '../models/post.model.js';
import { Categoria } from '../models/category.model.js';


// renderiza posts en /
export const renderPostInventory = async (req, res) => {
    try {
      const posts = await Post.findAll({ raw: true });
      res.render('postInventory', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar el inventario de posts');
    }
};

export const renderBody = async (req, res) => {
  try {
    res.render('body', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

export const renderPublicaciones = async (req, res) => {
  try {
    res.render('publicaciones', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

export const renderCats = async (req, res) => {
  try {
    res.render('cats', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

export const renderDogs = async (req, res) => {
  try {
    res.render('dogs', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

export const renderProfile = async (req, res) => {
  try {
    res.render('profile', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

export const renderLogin = async (req, res) => {
  try {
    res.render('blogin', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

export const renderAboutus = async (req, res) => {
  try {
    res.render('aboutus', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

export const rendercontact = async (req, res) => {
  try {
    res.render('contact', {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar el inventario de posts');
  }
};

// CRUD mantenedor de posts:
// funciona!
export const renderMantenedor = async (req, res) => {
    try {
      const posts = await Post.findAll({ raw: true });
      const categoria = await Categoria.findAll({ raw: true });
      res.render('mantenedor', { posts, categoria });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar el mantenedor de posts');
    }
};
//
// funciona!  
export const agregarPost = async (req, res) => {
  try {
    const { titulo, contenido, imagen, categoria } = req.body;
    const post = await Post.create({
      titulo,
      contenido,
      imagen,
      categoria
    });
    res.status(201).json({ code: 201, message: "Post ingresado con éxito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, message: "Error al guardar el post." });
  }
};



// funciona!
  export const eliminarPost = async (req, res) => {
    try {
      const { id } = req.params;
      await Post.destroy({ where: { id_post: id } });
      res.redirect('/mantenedor');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al eliminar el post');
    }
};


export const eliminarCategoriaporNombre = async (req, res) => {
  try {
    const { nombre_categoria } = req.params;

    // Encuentra la categoría usando el nombre_categoria
    const categoria = await Categoria.findOne({
      where: { nombre_categoria: nombre_categoria },
    });

    if (!categoria) {
      res.status(404).send('Categoría no encontrada');
      return;
    }

    // Elimina los posts relacionados con la categoría
    await Post.destroy({ where: { id_categoria: categoria.id_categoria } });

    // Elimina la categoría
    await Categoria.destroy({ where: { id_categoria: categoria.id_categoria } });

    res.redirect('/mantenedor');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la categoría');
  }
};


// put

// Controlador para renderizar la plantilla de actualización de post
export const renderPostActualizador = async (req, res) => {
  try {
    const id_post = req.params.id;
    console.log('ID del Post:', id_post);

    const post = await Post.findOne({ where: { id_post: id_post } });
    console.log('Buscando Post con ID:', id_post);
    
    if (!post) {
      console.log('Post no encontrado.');
      res.status(404).send('Post no encontrado.');
      return;
    }

    console.log('Post encontrado:', post);

    const categorias = await Categoria.findAll({ raw: true });

    res.render("actualizadorPosts",{
      id_post: post.id,
      categoria: categorias,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar el formulario de actualización de post.");
  }
};



export const renderCategoriaActualizador = async (req, res) => {
  try {
    const nombre_categoria = req.params.nombre_categoria;
    const categoria = await Categoria.findOne({ where: { nombre_categoria: nombre_categoria } });

    if (!categoria) {
      res.status(404).send('Categoría no encontrada');
      return;
    }

    const categorias = await Categoria.findAll({ raw: true });

    res.render("actualizadorCategorias", {
      id_categoria: categoria.id_categoria,
      categoria: categorias,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar el formulario de actualización de categoria.");
  }
};


// renderizado modal

