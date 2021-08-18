const UsersService = require("../services/UsersService");

const controller = {
    indexById: async (req, res) => {
      const { id } = req.params;
      const user = await UsersService.getById(id);
  
      if (!user) {
        return res.status(404).json({ error: `Usuário ${_id} não encontrado` });
      }
  
      return res.json(user);
    },
    indexAll: async (req, res) => {
      const list = await UsersService.getUserList();
      return res.json(list);
    },
    create: async (req, res) => {
      const { name, userName, password } = req.body;
      const user = await UsersService.createUser(
        name,
        userName,
        password,
      );
      
      return res.json(user);
    },
    update: async (req, res) => {
      const { name, userName, password } = req.body;
  
      const updatedUser = await UsersService.updateUser(
        req.userId,
        name,
        userName,
        password,
      );    
      return res.json(updatedUser);
    },
    destroy: async (req, res) => {
      const destroyedUser = await UsersService.destroyUser(req.userId);
  
      return res.json("Usuário deletado com sucesso.");
    },
  };
  
  module.exports = controller;