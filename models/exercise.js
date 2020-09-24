// Dependencies



// Exercie Module

module.exports = function(sequelize, Datatypes) {
    const Exercise = sequelize.define("Exercise", {
        // 
        exercise_id: {
            type: Datatypes.INTEGER,
            key: 'id',
        },
        exercise_name: {
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