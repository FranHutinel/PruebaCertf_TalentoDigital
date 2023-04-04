import {Post} from './post.model.js'
import {Categoria} from  './category.model.js'
import {Like} from './like.model.js'
import {Usuario} from './user.model.js'
import {Comentario} from './comment.model.js'

// relaciones que funcionan:
// relación uno a muchos entre dos modelos: Categoria y Post
Categoria.hasMany(Post, { foreignKey: "id_categoria" });
Post.belongsTo(Categoria, { foreignKey: "id_categoria" });

// prueba:
// relación uno a muchos entre dos modelos: Post y Like
Post.hasMany(Like, { foreignKey: 'id_post', as: 'likes' });
Like.belongsTo(Post, { foreignKey: 'id_post', as: 'post' });

// resto de relaciones a probar

Usuario.hasMany(Post, { foreignKey: 'id_usuario' });
Post.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.hasMany(Comentario, { foreignKey: 'id_usuario' });
Comentario.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.hasMany(Like, { foreignKey: 'id_usuario' });
Like.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Post.hasMany(Like, { foreignKey: 'id_post' });
Like.belongsTo(Post, { foreignKey: 'id_post' });