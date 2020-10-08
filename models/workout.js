module.exports = function(sequelize, DataTypes) {
  const Workout = sequelize.define("Workout", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });
  Workout.associate = models => {
    Workout.belongsToMany(models.Exercise, {
      through: "ExerciseWorkout"
    });
    Workout.belongsTo(models.User);
  };

  return Workout;
};
