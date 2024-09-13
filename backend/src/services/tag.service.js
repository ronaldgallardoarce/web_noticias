const { ClientError } = require('../utils/errors');
const tagDao = require('../dao/TagDao');


class TagService {
  async createTag(tagData, TagModel) {
    if (!tagData) {
      throw new ClientError('tag data is required', 400);
    }
    // Pasamos el modelo al DAO
    return await tagDao.createTag(tagData, TagModel);
  }

  async getAllTags(TagModel) {
    // Pasamos el modelo al DAO
    return await tagDao.getAllTag(TagModel);
  }

  async getTagById(id, TagModel) {
    // Pasamos el modelo al DAO
    return await tagDao.getTagById(id, TagModel);
  }

  async updateTag(id, tagData, TagModel) {
    const tag = await tagDao.updateTag(id, tagData, TagModel);
    if (!tag) {
      throw new ClientError("tag not found", 404);
    }
    return tag;
  }

  async deleteTag(id, TagModel) {
    const tag = await tagDao.deleteTag(id, TagModel);
    if (!tag) {
      throw new ClientError("tag not found", 404);
    }
    return tag;
  }
}

module.exports = new TagService();
