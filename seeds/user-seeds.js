const { User } = require('../models');

const userData = [
  {
    username: "Steve Carell",
    email: "office@gmail.com",
    password: "123456789"
  },
  {
    username: "Drake and Josh",
    email: "drakeandjosh@gmail.com",
    password: "123456789"
  },
  {
    username: "Steven Universe",
    email: "stevenuniverse@gmail.com",
    password: "123456789"
  },
  {
    username: "Emily in Paris",
    email: "emilyinparis@gmail.com",
    password: "123456789"
  },
  {
    username: "Joshua Tree",
    email: "joshuatree@gmail.com",
    password: "123456789"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;