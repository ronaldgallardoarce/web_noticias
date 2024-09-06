const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Like", {
    likeId: {
      type: DataTypes.UUID, 
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
  });
};
