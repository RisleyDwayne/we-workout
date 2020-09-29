module.exports = function (sequelize, DataTypes) {

  const Workout = sequelize.define("Workout", {
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
  Workout.associate = (models) => {
    Workout.belongsToMany(models.Exercise, {
      through: "ExerciseWorkout"
    })
  };
  return Workout;

};