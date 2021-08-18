const express = require("express");
const router = express.Router();

const controller = require("../controllers/UsersController");

// CRUD USUARIOS
router.get("/", controller.indexAll); //Criei uma rota para buscar todos os usuários cadastrados também
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);
    
//GET DETALHADO
router.get("/:id", controller.indexById); //Rota para recuperar cada usuário individualmente, pelo seu ID

module.exports = router;