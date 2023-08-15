const User = require('../models/user.model');

const users = [
  {
    email: "alex@gmail.com",
    username: "alex",
  },
  {
    email: "jim@gmail.com",
    username: "jim",
  },
  {
    email: "john@gmail.com",
    username: "john",
  },
  {
    email: "anthony@gmail.com",
    username: "anthony",
  },
  {
    email: "ram@gmail.com",
    username: "ram",
  },
];

const seedData = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(users)
  } catch (err) {
    console.error(err);
  }

  console.log("data is seeded from seed script.");
};
module.exports = seedData;