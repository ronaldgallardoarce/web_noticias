const response  = require('../utils/response');
const resError  = require('../utils/resError');
const catchedAsync = require('../utils/catchedAsync');
const { Categoria } = require('../dbContext'); // Importamos el modelo
const categoriaService = require('../services/categoria.service');


class CategoriaoController {
  // Obtener todas las categorias
  createCategoria = catchedAsync(async (req, res) => {
    const categoriaData = { ...req.body };

    // Pasamos el modelo de categoria al servicio
    const categoria = await categoriaService.createCategoria(categoriaData, Categoria);

    return response(res, 201, categoria);
  });

  getAllCategorias = catchedAsync(async (req, res) => {
    // Pasamos el modelo de categoria al servicio
    const categorias = await categoriaService.getAllCategorias(Categoria);

    return response(res, 200, categorias);
  });

  getCategoriaById = catchedAsync(async (req, res) => {
    const { id } = req.params;
    // Pasamos el modelo de categoria al servicio
    const categoria = await categoriaService.getCategoriaById(id, Categoria);
    if (!categoria) {
      return resError(res, 404, "Categoria not found");
    }

    return response(res, 200, categoria);
  });
  // Actualizar un categoria
  updateCategoria = catchedAsync(async (req, res) => {
    const { id } = req.params;
    const categoriaData = req.body;
    const updateCategoria = await categoriaService.updateCategoria(id, categoriaData, Categoria);
    if (!updateCategoria) {
      return resError(res, 404, "Categoria not found");
    }
    response(res, 200, updateCategoria);
  });

  // Eliminar una categoria por id
  deleteCategoria = catchedAsync(async (req, res) => {
    const { id } = req.params;
    const deletedCategoria = await categoriaService.deleteCategoria(id, Categoria);
    if (!deletedCategoria) {
      return resError(res, 404, "Categoria not found");
    }
    response(res, 204, null);
  });
}

module.exports = new CategoriaoController();


