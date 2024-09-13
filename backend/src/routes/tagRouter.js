const express = require("express");
const tagController = require("../controllers/tagController")
const router = express();

// Rutas
router.get('/', tagController.getAllTags);//obtener todo
router.get('/:id', tagController.getTagById); // obtener tag por id
router.post('/', tagController.createTag);//crear Tag
router.put('/:id', tagController.updateTag);// Update  Tag
router.delete('/:id', tagController.deleteTag);// Delete  Tag por Id

module.exports = router;
