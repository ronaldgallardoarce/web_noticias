const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Tag", {
    tagId: {
      type: DataTypes.UUID, 
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
