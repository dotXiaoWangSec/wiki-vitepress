import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
import timeline from "vitepress-markdown-timeline"; 
export default defineConfig({
  cleanUrls:true,


  markdown: { 
    //行号显示
    lineNumbers: true, 

    //时间线
    config: (md) => {
      md.use(timeline);
    },
  },

  themeConfig: {

    siteTitle: '小小王互联网科技',   
    nav: [
      { text: '首页', link: '/' },
      { text: '开源项目', link: 'https://dotxiaowangsec.github.io/wiki/#/', noIcon: true },
      // {
      //   text: '开源项目',
      //   items: [
      //     { text: 'Web-Poc1', link: 'https://dotxiaowangsec.github.io/wiki/#/' , noIcon: true  },
      //     { text: 'Web-Poc2', link: 'https://github.com/ibaiw/2023Hvv/' , noIcon: true  },
      //   ]
      // },
      { text: 'Web安全', link: '/web/index.md' },
      { text: '渗透测试', link: '/redteam/index.md' },
      { text: 'CTF比赛', link: '/ctf/index.md' },

    ],
    

    sidebar: [
      {
        text: '开源项目',
        items: [
          { text: 'POC', link: '/op/index.md' },
          { text: '信息搜集', link: '/op/inf/index.md' }
        ]
      },
      {
        text: 'Web安全',
        items: [
          { text: '基础知识', link: '/web/index.md' },
          { text: '应急响应', link: '/web/index.md' },
          { text: '靶场环境', link: '/web/range/index.md' }
        ]
      },
      //这个位置后面继续更新左侧导航栏
      {
        text: '渗透测试',
        items: [
          { text: '基础知识', link: '/redteam/index.md' },
          { text: '信息收集', link: '/redteam/information/index.md' },
          { text: '靶场搭建', link: '/redteam/index.md' },
          { text: '问题解决', link: '/redteam/index.md' },
          { text: '流量隐藏', link: '/redteam/Traffichiding/index.md' },
        ]
      },
      {
        text: 'CTF比赛',
        items: [
          { text: 'Web', link: '/ctf/Web/index.md' },
          { text: 'Reverse', link: '/ctf/Reverse/index.md' },
          { text: 'Pwn', link: '/ctf/Pwn/index.md' },
          { text: 'Crypto', link: '/ctf/Crypto/index.md' },
          { text: 'Misc', link: '/ctf/Misc/index.md' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dotXiaoWangSec/' }, 
      { icon: 'discord', link: 'https://discord.gg/auDmg8XJMN' }
    ],
    footer: { 
      message: '基于 MIT 许可发布', 
      copyright: 'Copyright © 2023-2025 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2024089892号-1</a>', 
    },
    editLink: { 
      pattern: 'https://github.com/dotXiaoWangSec/wiki-vitepress', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }

  },

  sitemap: {
    hostname: 'https://xiaowang68.top',
  }
  
})
