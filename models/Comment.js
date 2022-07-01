//Utilizing/import  sequelize library
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

//Define 'Comment' as model
class Comment extends Model { };

//Intialize Comment Model
Comment.init({
    id: {
        type: DataTypes, INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    commentary: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },

    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    },

    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        dafaultValue: DataTypes.NOW
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;