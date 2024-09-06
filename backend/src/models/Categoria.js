const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Categoria", {
    categoriaId: {
      type: DataTypes.UUID, 
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    orden:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nombreUrl: {
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
