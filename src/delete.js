const { User, Blog } = require('./model')

!(async () => {
  // const delBlogRes = await Blog.destroy({
  //   where: {
  //     id: 2
  //   }
  // })
  // console.log('delBlogRes...', delBlogRes > 0)

  const delUserRes = await User.destroy({
    where: {
      id: 2
    }
  })
  console.log('delBlogRes...', delUserRes > 0)
})()
