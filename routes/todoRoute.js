const express = require("express")
const router = express.Router()
const todoController = require("../controller/todoController")



router.get("/",todoController.findAll)
router.get("/detail",todoController.findAllDetail)
router.post("/",todoController.create)
router.delete("/:id",todoController.delete)


module.exports = router