//Utilizing/import  sequelize library
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

//Define 'post'  as model
class Post extends Model { };

//Creates a new model for a  Post
Post.init({
    //Colum definitions for the model(ID, TITLE, CONTENTS, USER_ID, dateCreated)
    id: {
        type: DataTypes, INTEGER,
        allowNull: false,
        primaryKey; true,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    contents: {
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

    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        dafaultValue: DataTypes.NOW
    },

},
    //sequelize options for this model
    //Setting rules to what will happen to data you get through this model
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',

    }
);
//Export this model as 'Post"
module.exports = Post;