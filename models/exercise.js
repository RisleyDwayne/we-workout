// Dependencies



// Exercie Module

module.exports = function(sequelize, Datatypes) {
    const Exercise = sequelize.define("Exercise", {
        // 
        id: {
            type: Datatypes.UUID,
            defaultValue: sequelize.UUIDV4,
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
            type: Datatypes.STRING,

        },
        body_impact: {
            type: Datatypes.STRING,
        }

      });
      
      return Exercise;
};