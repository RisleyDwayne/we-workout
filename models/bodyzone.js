module.exports = (sequelize, DataTypes) => {
    const BodyZone = sequelize.define("BodyZone", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
        },
        zone: {
            type: DataTypes.ENUM,
            values: ['Upper Body', 'Lower Body', 'Cardio'],
            allowNull: false,
        }
    });

    BodyZone.associate = (models) => {
        BodyZone.belongsTo(models.Exercise)
    };

    return BodyZone;
};