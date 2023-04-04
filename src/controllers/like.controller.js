import { Post } from '../models/post.model.js';

import { Like } from '../models/like.model.js';

export const getAllLikes = async (req, res, next) => {
try {
const likes = await Like.findAll();
res.status(200).json(likes);
} catch (error) {
next(error);
}
};

export const createLike = async (req, res, next) => {
try {
const { postId, userId, type } = req.body;
const like = await Like.create({ postId, userId, type });
res.status(201).json(like);
} catch (error) {
next(error);
}
};


export const updateLike = async (req, res, next) => {
    try {
    const { id } = req.params;
    const { postId, userId, type } = req.body;
    const like = await Like.findOne({ where: { id } });
    if (!like) {
        res.status(404).json({ message: 'No se encontró el like con el id proporcionado.' });
      } else {
        await like.update({ postId, userId, type });
        res.status(200).json(like);
      }
    } catch (error) {
        next(error);
        }
};


export const deleteLike = async (req, res, next) => {
    try {
    const { id } = req.params;
    const like = await Like.findOne({ where: { id } });
    if (!like) {
        res.status(404).json({ message: 'No se encontró el like con el id proporcionado.' });
      } else {
        await like.destroy();
        res.status(204).end();
      }
    } catch (error) {
        next(error);
        }
};
