const { Sequelize } = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql'
}

// 线上环境使用
// conf.pool = {
//   max: 5, // 连接池最大连接数
//   min: 0, // 连接池最小连接数
//   idle: 10000 // 空闲时间超过 则释放
// }

const seq = new Sequelize('koa2_weibo_db', 'root', 'lwl1224', conf)

module.exports = seq
