const express = require("express")
const router = express.Router()

// Todas as rotas relacionadas a usuários estarão sob "/api/users"
router.use("/api/users", require("./UserRoutes.jsx"))  

module.exports = router