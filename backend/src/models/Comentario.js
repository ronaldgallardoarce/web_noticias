const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Comentario", {
    comentarioId: {
      type: DataTypes.UUID, 
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
  });
};
