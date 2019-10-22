const seq = require('./seq')

require('./model')

// 测试连接
seq.authenticate().then(() => {
  console.log('connect mysql success')
}).catch(() => {
  console.log('connect mysql fail!')
})

seq.sync({ force: true }).then(() => {
  console.log('sync ok')
  process.exit()
})