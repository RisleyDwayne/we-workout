// Exercie Module

<<<<<<< HEAD
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
=======
module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
    

  });
Exercise.associate = (models)=> {
  Exercise.belongsToMany(models.Workout, {
    through: "ExerciseWorkout"
});
}

>>>>>>> 9006afc7475d575b0f668c5678e11eb426200600

  return Exercise;
};