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
    // https://vitepress.dev/reference/default-theme-config

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
      { text: '圈子直播', link: 'https://appydwhoino2831.h5.xiaoeknow.com/p/decorate/page/eyJpZCI6IjU0MTQ1NTEifQ', noIcon: true },

    ],
    

    sidebar: [
      {
        text: '开源项目',
        items: [
          { text: 'POC验证', link: '/op/index.md' },
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
      {text: '圈子直播', link: '/live/index.md' },
      

    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dotXiaoWangSec/' }, 
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: 'https://dot-1325231049.cos.ap-shanghai.myqcloud.com/public/gzh.jpg',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat'
      },
      { icon: 'discord', link: 'https://discord.gg/auDmg8XJMN' }
    ],
    footer: { 
      message: '基于 MIT 许可发布', 
      copyright: 'Copyright © 2023-2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2024089892号-1</a>', 
    },
    editLink: { 
      pattern: 'https://github.com/dotXiaoWangSec/wiki-vitepress', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }

  },

  sitemap: {
    hostname: 'https://xiaowang68.cn',
  }
  
})
