const { Post } = require('../models');

const postData = [
    {
        title: "Post A",
        contents: "Apple",
        user_id: 1
    },

    {
        title: "Post B",
        contents: "Banana",
        user_id: 2
    },

    {
        title: "Post C",
        contents: "Carrot",
        user_id: 3
    },

    {
        title: "Post D",
        contents: "Dragonfuit",
        user_id: 4
    },

    {
        title: "Post E",
        contents: "Eggplant",
        user_id: 5
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;