module.exports = function (sequelize, DataTypes) {
    const UpperBody = sequelize.define("UpperBody", {
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
      body_zone: {
        type: DataTypes.STRING,
      },
    });
  
    return UpperBody;
  };