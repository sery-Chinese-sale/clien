const router = require("express").Router();
const productController =require("../controllers/productController")

router.get("", productController.getAllProducts)
router.get("/:id", productController.getProductsByUserId)
router.post("", productController.addProduct)
router.delete("/:id", productController.deleteProductById)

module.exports = router;