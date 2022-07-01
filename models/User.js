//Utilizing/import  sequelize library
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config.js');
const { beforeCreate } = require('./Post.js');

//Define User as a model
class User extends Model {
    //Define Mehtod to run on each user created to check the password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//Initialize User Model
User.init({
    id: {
        type: DataTypes, INTEGER,
        allowNull: false,
        primaryKey; true,
        autoIncrement: true,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5],
        },
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5],
        },
    }
},
    //methods that run upon entry of a new record kinda like a middleman
    hooks: {
    async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(
            newUserData.password,
            10
        );
        return newUserData;
    },

    async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
            updatedUserData.password,
            10
        );
        return updatedUserData;
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',

    }
);

module.exports = User;
