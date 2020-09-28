// Dependencies



// Exercie Module

module.exports = function(sequelize, DataTypes) {
    const Exercise = sequelize.define("Exercise", {
        // 
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, 
        },
        // 
        weights_used: {
          type: DataTypes.BOOLEAN,
        },
        body_zone: {
            type: DataTypes.STRING,

        },
        body_impact: {
            type: DataTypes.STRING,
        }

      });
      
      return Exercise;
};