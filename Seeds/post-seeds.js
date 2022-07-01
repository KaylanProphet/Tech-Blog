const { Post } = require('../models');

const postData = [
    {
        title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        contents: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        user_id: 1
    },

    {
        title: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
        contents: "BBBBBBBBBBBBBBBBBBBBBBBBBB",
        user_id: 2
    },

    {
        title: "CCCCCCCCCCCCCCCCCC",
        contents: "CCCCCCCCCCCCCC",
        user_id: 3
    },

    {
        title: "DDDDDDDDDDDDDDDDD",
        contents: "DDDDDDDDDDDDDD",
        user_id: 4
    },

    {
        title: "EEEEEEEEEEEEEEEEEEE",
        contents: "EEEEEEEEEEEEEEEEEEEE",
        user_id: 5
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;