const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create the relationship between Users and Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

//create the relationship between Posts and Users
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

//create the relationship between Comments and Users
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
