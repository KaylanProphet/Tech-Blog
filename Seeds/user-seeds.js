const { User } = require('../models');

const userData = [
    {
        username: "kaylan",
        email: "kaylan@gmail.com",
        password: "password"

    },
    {
        username: "apple",
        email: "a@apple.com",
        password: "password2"

    },
    {
        username: "banana",
        email: "b@banana.com",
        password: "password3"

    },
    {
        username: "carrot",
        email: "c@carrot.com",
        password: "password4"

    },
    {
        username: "dragonfruit",
        email: "d@dragonfruit.com",
        password: "password5"

    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;