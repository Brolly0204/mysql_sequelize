const { User } = require('./model')

!(async () => {
  const updateRes = await User.update({
    nickName: '三哥儿'
  }, {
    where: {
      userName: 'zhangsan'
    }
  })
  console.log('updateRes...', updateRes[0] > 0)
})()
