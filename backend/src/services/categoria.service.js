const { ClientError } = require('../utils/errors');
const categoriaDao = require('../dao/CategoriaDao');


class CategoriaService {
  async createCategoria(categoriaData, CategoriaModel) {
    if (!categoriaData) {
      throw new ClientError('categoria data is required', 400);
    }
    // Pasamos el modelo al DAO
    return await categoriaDao.createCategoria(categoriaData, CategoriaModel);
  }

  async getAllCategorias(CategoriaModel) {
    // Pasamos el modelo al DAO
    return await categoriaDao.getAllCategoria(CategoriaModel);
  }

  async getCategoriaById(id, CategoriaModel) {
    // Pasamos el modelo al DAO
    return await categoriaDao.getCategoriaById(id, CategoriaModel);
  }

  async updateCategoria(id, categoriaData, CategoriaModel) {
    const categoria = await categoriaDao.updateCategoria(id, categoriaData, CategoriaModel);
    if (!categoria) {
      throw new ClientError("categoria not found", 404);
    }
    return categoria;
  }

  async deleteCategoria(id, CategoriaModel) {
    const categoria = await categoriaDao.deleteCategoria(id, CategoriaModel);
    if (!categoria) {
      throw new ClientError("categoria not found", 404);
    }
    return categoria;
  }
}

module.exports = new CategoriaService();
