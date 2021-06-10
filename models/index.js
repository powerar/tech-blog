const User = require('./User');
const Post = require('./Post');

//create the relationship between Users and Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//create the relationship between Posts and Users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };