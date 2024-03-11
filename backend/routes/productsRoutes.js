import express from "express"
const router = express.Router()
import {protect, admin} from "../middleware/authMiddleware.js"
import { getProductsByBrand,getBrands,getCategories,getProductsByCategory,createProduct, getProducts, getProductsById,updateProduct,deleteProduct,createProductReview,getTopProducts } from "../controllers/productController.js"
import checkObjectId from "../middleware/checkObjectId.js"

router.route('/').get(getProducts).post(protect,admin,createProduct)
router.get('/top',getTopProducts)
router.get('/categories',getCategories)
router.get('/brands',getBrands)
router.get('/category/:category',getProductsByCategory)
router.get('/brands/:brand',getProductsByBrand)
router.route('/:id').get(checkObjectId,getProductsById).put(protect, admin, checkObjectId, updateProduct).delete(protect,admin,checkObjectId,deleteProduct)
router.route('/:id/reviews').post(protect,checkObjectId,createProductReview)


export default router