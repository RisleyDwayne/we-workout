/* eslint-disable camelcase */
// Exercise Module

module.exports = function(sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    //
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    body_zone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    equipment_used: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },

    cardio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

    exercise_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  Exercise.associate = models => {
    Exercise.belongsToMany(models.Workout, {
      through: "ExerciseWorkout"
    });
  };

  return Exercise;
};
