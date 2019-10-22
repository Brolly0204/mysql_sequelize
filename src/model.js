const { DataTypes } = require('sequelize')
const seq = require('./seq')

const User = seq.define('user', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nickName: {
    type: DataTypes.STRING
  }
})

const Blog = seq.define('blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

// 外键关联
Blog.belongsTo(User, {
  foreignKey: 'userId'
})

// 一个user 可以有 多个blog
User.hasMany(Blog, {
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}