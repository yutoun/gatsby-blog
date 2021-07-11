'use strict';
<script data-ad-client="ca-pub-1580241070744469" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-T7LYQS2HJF',
        head: true
      }
    },
    `gatsby-plugin-sitemap`, 
  ],
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'A Path To Freedom',
  subtitle: 'プログラミング、英語、マーケティングについて発信してきます！',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  useKatex: false,
  menu: [
    {
      label: 'All',
      path: '/'
    },
    {
      label: 'Tech',
      path: '/category/tech'
    },
    {
      label: 'English',
      path: '/category/english'
    },
    {
      label: 'Marketing',
      path: '/category/marketing'
    },
    {
      label: 'Others',
      path: '/category/others'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
  ],
  author: {
    name: 'yuto',
    photo: 'myface.png',
    bio: '早稲田文系(プログラミング未経験)▶︎バックパッカー▶︎大手新聞会社都内営業1位▶︎ワーホリ🇦🇺🇳🇿 ▶︎ プログラミング完全独学 ｜ TOEIC:895｜python × Vue.js ｜ tech,英語, SNSマーケについて書き殴ります',
    contacts: {
      email: '',
      facebook: '#',
      telegram: '#',
      twitter: '/a_pathToFreedom',
      github: '',
      rss: '',
      vkontakte: '',
      linkedin: '#',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '',
    }
  }
};
