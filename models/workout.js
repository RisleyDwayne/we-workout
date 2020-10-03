module.exports = function (sequelize, DataTypes) {

    const Workout = sequelize.define("workout", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            // defaultValue: DataTypes.UUIDV4,
        },
        workout_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
    Workout.associate = (models) => {
        Workout.belongsToMany(models.Exercise, {
            through: "ExerciseWorkout"
        });
        Workout.belongsTo(models.User)
    };


    return Workout;

};
