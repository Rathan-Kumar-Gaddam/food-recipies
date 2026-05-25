const express = require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require("../controllers/recipe")
const router = express.Router()


router.get('/',getRecipes);//get all recipie
router.get('/:id',getRecipe)//get recipe by id
router.post('/',addRecipe) // add recipe
router.put('/:id',editRecipe) // edit sepcific reicipe by id
router.delete('/:id',deleteRecipe) //delect recipe by id


module.exports = router