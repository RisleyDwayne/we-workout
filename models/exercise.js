// Dependencies



// Exercie Module

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
    

  });
Exercise.associate = (models)=> {
  Exercise.belongsToMany(models.Workout, {
    through: "ExerciseWorkout"
});
}


  return Exercise;
};