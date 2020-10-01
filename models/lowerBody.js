module.exports = function (sequelize, DataTypes) {
    const LowerBody = sequelize.define("LowerBody", {
      // 
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
  
    
    return LowerBody;
  };