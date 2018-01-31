## koa版本mock服务器

1. 把需要返回的数据放入datas文件夹（或者任意文件夹）
2. 配置`routeConfig.js`
  ```
  module.exports = [
    {
      url: '/Menu/FirstMenuQuery',
      method: 'POST',
      path: './datas/cate.json'
    },
    {
      url: '/Menu/SecondMenuQuery',
      method: 'POST',
      data: {
        parentMenuID: '2'
      },
      path: './datas/cate2.json'
    },
    {
      url: '/Menu/ThirdMenuQuery',
      method: 'POST',
      data: {
        parentMenuID: '21'
      },
      path: './datas/cate3.json'
    }
  ]
  ```

> 参数说明: @url:请求url @method:请求方法 @data:请求参数 @path:返回值路径
