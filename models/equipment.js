module.exports = function (sequelize, DataTypes) {
    const Equipment = sequelize.define("Equipment", {
      // 
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      equipment_type: {
        type: DataTypes.STRING,
      },
    });
  
    return Equipment;
  };