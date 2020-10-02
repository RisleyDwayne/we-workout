module.exports = (sequelize, DataTypes) => {
    const BodyZone = sequelize.define("BodyZone", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            
        }
    });
};