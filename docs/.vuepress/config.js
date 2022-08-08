module.exports = {
  title: '梦想远方',
  description: '诗和远方',
  base: '/',
  themeConfig: {
    lastUpdated: '上次更新',
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'JS', link: '/js/' },
      { text: 'CSS', link: '/css/' },
      { text: 'TS', link: '/ts/' },
      { text: 'HTTP', link: '/http/' },
    ],
    sidebar: {
      '/css/': [
        {
          title: 'CSS',
          path: '/css/',
          children: [
            {
              title: 'css',
              path: 'css',
            },
            {
              title: 'BFC',
              path: 'BFC',
            },
          ],
        },
      ],
      '/js/': [
        {
          title: 'JavaScript',
          path: '/js/',
          children: [
            {
              title: 'JS 检测方法',
              path: 'DetectionMethod',
            },
            {
              title: 'var let const的区别',
              path: 'var&let&const',
            },
          ],
        },
      ],
      '/ts/': [
        {
          title: 'typeScript',
          path: '/ts/',
          children: [{ title: 'ts', path: 'TS' }],
        },
      ],
      '/http/': [
        {
          title: 'HTTP',
          path: '/http/',
          children: [{ title: 'http', path: 'http&https' }],
        },
      ],
    },
  },
}
