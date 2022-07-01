const { User } = require('../models');

const userData = [
    {
        username: "bing_bong",
        email: "bingbong@bong.com",
        password: "p@ssword1"

    },
    {
        username: "bing_bong2",
        email: "bingbong2@bong.com",
        password: "p@ssword2"

    },
    {
        username: "bing_bong3",
        email: "bingbong3@bong.com",
        password: "p@ssword3"

    },
    {
        username: "bing_bong4",
        email: "bingbong4@bong.com",
        password: "p@ssword4"

    },
    {
        username: "bing_bong5",
        email: "bingbong5@bong.com",
        password: "p@ssword5"

    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;