
class TagDao {
    // Obtener todos los tag
    async getAllTag(TagModel) {
  
      return await TagModel.findAll();
    }
  
    // Crear un nuevo tag
    async createTag(tagData, TagModel) {
      return await TagModel.create(tagData);
    }
  
    // Obtener un tag por ID
    async getTagById(id, TagModel) {
      return await TagModel.findByPk(id);
    }
  
    // Actualizar un tag
    async updateTag(id, tagData, TagModel) {
      const tag = await TagModel.findByPk(id);
      if (!tag) return null;
      await tag.update(tagData);
      return tag;
    }
  
    // Eliminar un tag
    async deleteTag(id, TagModel) {
      const tag = await TagModel.findByPk(id);
      if (!tag) return null;
      await tag.destroy();
      return tag;
    }
  }
  
  module.exports = new TagDao();
  
  
  
  