const modelPosts = require('./posts');
const modelUsers = require('./users')
module.exports = (sequelize,DataTypes) => {
    const comments = sequelize.define("comments",{
        idcomments:{type: DataTypes.INTEGER, primaryKey:!0, autoIncrement: !0},
        users_id:{ 
            type:DataTypes.INTEGER,
            references:{
                model: modelUsers,
                key:'id'
            }
        },
        content: DataTypes.STRING,
        posts_idposts: {
            type: DataTypes.INTEGER,
            references: {
                model: modelPosts,
                key:'idposts',
            }
        }

    },{
        timestamps: false,createdAt: false,
    });
    return comments;
}
