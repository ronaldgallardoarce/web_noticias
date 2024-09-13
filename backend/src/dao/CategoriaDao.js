
class CategoriaDao {
    // Obtener todos los categoria
    async getAllCategoria(CategoriaModel) {
  
      return await CategoriaModel.findAll();
    }
  
    // Crear un nuevo categoria
    async createCategoria(categoriaData, CategoriaModel) {
      return await CategoriaModel.create(categoriaData);
    }
  
    // Obtener un categoria por ID
    async getCategoriaById(id, CategoriaModel) {
      return await CategoriaModel.findByPk(id);
    }
  
    // Actualizar un categoria
    async updateCategoria(id, categoriaData, CategoriaModel) {
      const categoria = await CategoriaModel.findByPk(id);
      if (!categoria) return null;
      await categoria.update(categoriaData);
      return categoria;
    }
  
    // Eliminar un categoria
    async deleteCategoria(id, CategoriaModel) {
      const categoria = await CategoriaModel.findByPk(id);
      if (!categoria) return null;
      await categoria.destroy();
      return categoria;
    }
  }
  
  module.exports = new CategoriaDao();
  
  
  
  