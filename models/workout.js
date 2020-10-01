module.exports = function(sequelize, DataTypes) {
  const Workout = sequelize.define("Workout", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  Workout.associate = (models) => {
    Workout.hasMany(models.Exercise, {});
  };
  return Workout;
};
