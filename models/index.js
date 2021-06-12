const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create the relationship between Posts and Users
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'cascade'
});

//create the relationship between Comments and Users
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});


module.exports = { User, Post, Comment };
