<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
const Workout = sequelize.define("Workout", {
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
})
return Workout;
}; 
=======
module.exports = function (sequelize, DataTypes) {

    const Workout = sequelize.define("Workout", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
        });
        Workout.belongsTo(models.User)
    };


    return Workout;

};
>>>>>>> 9006afc7475d575b0f668c5678e11eb426200600
