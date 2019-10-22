const { User, Blog } = require('./model')

!(async () => {
  const zhangsan = await User.findOne({
    where: {
      userName: 'zhangsan'
    }
  })
  // console.log('zan', zhangsan.dataValues)

  const asan = await User.findOne({
    attributes: ['userName', 'nickName'],
    where: {
      userName: 'zhangsan'
    }
  })
  // console.log('zan', asan.dataValues)

  const asanBlog = await Blog.findAll({
    where: {
      userId: 1
    },
    order: [['id', 'desc']]
  })
  const blogs = asanBlog.map(blog => blog.dataValues)
  // console.log('blog', blogs)

  // const asanBlogList = await Blog.findAll({
  //   limit: 2,
  //   offset: 2,
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })
  // console.log('asanBlogList', asanBlogList.map(blog => blog.dataValues))

  // const blogListAndCount = await Blog.findAndCountAll({
  //   limit: 2,
  //   offset: 0
  // })
  // console.log(
  //   'blogListAndCount',
  //   blogListAndCount.count,
  //   blogListAndCount.rows.map(blog => blog.dataValues)
  // )

  const blogListAndUser = await Blog.findAndCountAll({
    order: [['id', 'desc']],
    include: [
      {
        model: User,
        attributes: ['userName', 'nickName'],
        where: {
          userName: 'zhangsan'
        }
      }
    ]
  })
  // console.log(
  //   'blogListAndUser',
  //   blogListAndUser.count,
  //   blogListAndUser.rows.map(blog => {
  //     const blogVal = blog.dataValues
  //     blogVal.user = blogVal.user.dataValues
  //     return blogVal
  //   })
  // )

  // user => blog
  const userListAndBlog = await User.findAndCountAll({
    attributes: ['userName', 'nickName'],
    include: [
      {
        model: Blog
      }
    ]
  })

  console.log('userListAndBlog', userListAndBlog.count, userListAndBlog.rows.map(user => {
    const userVal = user.dataValues
    userVal.blogs = userVal.blogs.map(blog => blog.dataValues)
    return userVal
  }))
})()
