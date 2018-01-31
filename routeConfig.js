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