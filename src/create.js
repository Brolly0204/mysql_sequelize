const { User, Blog } = require('./model')

!(async () => {
  const zhangsan = await User.create({
    userName: 'zhangsan',
    password: 'anc',
    nickName: '阿三'
  })
  // INSERT INTO `users` (`id`,`userName`,`password`,`nickName`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?);
  const zhangsanId = zhangsan.dataValues.id
  console.log('zhangsanId', zhangsanId)

  const lisi = await User.create({
    userName: 'lisi',
    password: 'acc',
    nickName: '阿四'
  })
  const lisiId = lisi.dataValues.id
  console.log('lisiId', lisiId)

  const blog1 = await Blog.create({
    title: '标题1',
    content: '内容1',
    userId: zhangsanId
  })

  const blog2 = await Blog.create({
    title: '标题2',
    content: '内容2',
    userId: zhangsanId
  })

  const blog3 = await Blog.create({
    title: '标题3',
    content: '内容3',
    userId: lisiId
  })

  const blog4 = await Blog.create({
    title: '标题4',
    content: '内容4',
    userId: lisiId
  })
  console.log('blog4', blog1.dataValues)
})()