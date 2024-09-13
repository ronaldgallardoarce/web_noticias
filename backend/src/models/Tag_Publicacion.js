const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Tag_Publicacion", {
    publiacionTagId: {
      type: DataTypes.UUID, 
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false,
    }
  });
};
