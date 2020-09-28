// module.exports = function(sequelize, DataTypes) {
//     const ExerciseWorkout = sequelize.define("ExerciseWorkout", {
//         WorkoutId: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Workout,
//                 key: 'id'
//             }
//         },
//         ExerciseId: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Exercise,
//                 key: 'id',
//                 primaryKey: true,
//             }
//         }
//     });
    
    
//     ExerciseWorkout.associate = function (models) {
//         models.Exercise.belongsToMany(Workout, {
//             through: ExerciseWorkout
//         });
//         models.Workout.belongsToMany(Exercise, {
//             through: ExerciseWorkout
//         });
//     };
// return ExerciseWorkout;
// };

// console.log()

