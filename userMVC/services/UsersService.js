const User = require("../models/UserModel");

const UsersService = {
  createUser: async (name, userName, password) => {
    const newUser = await User.create({
      name,
      userName,
      password,
    });
    return newUser;
  },
  getUserList: async () => {
    const results = await User.find();
    return results;
  },
  updateUser: async (id, name, userName, password) => {
    const updatedUser = await User.findOneAndUpdate(
      {
        id
      },
      {$set:{
        name,
        userName,
        password,
        }
      },
      {
        new: true
      });
    return updatedUser;
  },
  destroyUser: async (id) => {
    const destroyedUser = await User.deleteOne(
      {
        id
      });
    return destroyedUser;
  },
  getById: async (id) => {
    return await User.findById(id);
  },
};

module.exports = UsersService;