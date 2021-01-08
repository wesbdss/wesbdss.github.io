module.exports = (sequelize,DataTypes) => {
    const users = sequelize.define("users",{
        id: {type: DataTypes.INTEGER,primaryKey:!0, autoIncrement: !0},
        name: DataTypes.STRING,
        level: DataTypes.INTEGER,
        photo: DataTypes.BLOB

    },{
        timestamps: false,createdAt: false,
    });
    return users;
}
