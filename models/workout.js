const sequelize = require(sequelize);
const Sequelize = require(Sequelize);
module.exports = function(sequelize, Datatypes) {
const Workout = sequelize.define("Workout", {
    id: {
        type: Datatypes.UUID,
        defaultValue: sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
    },
})
return Workout;
}; 