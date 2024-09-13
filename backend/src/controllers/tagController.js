const response  = require('../utils/response');
const resError  = require('../utils/resError');
const catchedAsync = require('../utils/catchedAsync');
const { Tag } = require('../dbContext'); // Importamos el modelo
const tagService = require('../services/tag.service');


class TagoController {
  // Obtener todos los tags
  createTag = catchedAsync(async (req, res) => {
    const tagData = { ...req.body };

    // Pasamos el modelo del tag al servicio
    const tag = await tagService.createTag(tagData, Tag);

    return response(res, 201, tag);
  });

  getAllTags = catchedAsync(async (req, res) => {
    // Pasamos el modelo del tag al servicio
    const tags = await tagService.getAllTags(Tag);

    return response(res, 200, tags);
  });

  getTagById = catchedAsync(async (req, res) => {
    const { id } = req.params;
    // Pasamos el modelo del tag al servicio
    const tag = await tagService.getTagById(id, Tag);
    if (!tag) {
      return resError(res, 404, "Tag not found");
    }

    return response(res, 200, tag);
  });
  // Actualizar un tag
  updateTag = catchedAsync(async (req, res) => {
    const { id } = req.params;
    const tagData = req.body;
    const updateTag = await tagService.updateTag(id, tagData, Tag);
    if (!updateTag) {
      return resError(res, 404, "Tag not found");
    }
    response(res, 200, updateTag);
  });

  // Eliminar un tag por id
  deleteTag = catchedAsync(async (req, res) => {
    const { id } = req.params;
    const deletedTag = await tagService.deleteTag(id, Tag);
    if (!deletedTag) {
      return resError(res, 404, "Tag not found");
    }
    response(res, 204, null);
  });
}

module.exports = new TagoController();


