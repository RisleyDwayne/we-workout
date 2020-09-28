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