import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

export const Post = sequelize.define(
    'Post',
    {
      id_post: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      titulo: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      contenido: {
        type: DataTypes.STRING(10000),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      imagen: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      categoria: {
        type: DataTypes.STRING(200),
      },
    },
    {
      timestamps: true,
      tableName: 'Post',
      alias : 'Post'
    }
);