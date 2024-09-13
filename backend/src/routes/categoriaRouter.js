const express = require("express");
const categoriaController = require("../controllers/categoriaController")
const router = express();

// Rutas
router.get('/', categoriaController.getAllCategorias);//obtener todo
router.get('/:id', categoriaController.getCategoriaById); // obtener por id
router.post('/', categoriaController.createCategoria);//crear Categoria
router.put('/:id', categoriaController.updateCategoria);// Update a Categoria
router.delete('/:id', categoriaController.deleteCategoria);// Delete a Categoria por Id

module.exports = router;
