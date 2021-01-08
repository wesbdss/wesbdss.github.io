module.exports = (sequelize,DataTypes) => {
    const posts = sequelize.define("posts",{
        idposts: {type: DataTypes.INTEGER, primaryKey:!0, autoIncrement: !0},
        title: DataTypes.STRING,
        image: DataTypes.BLOB,
        likes: {type: DataTypes.INTEGER, defaultValue:0}

    },{
        timestamps: false,createdAt: false,
    });
    return posts;
}
