import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '信息流广告',
      desc: '关闭信息流中的卡片广告',
      enable: false,
      matchRoot: true,
      activityIds: [
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
        'com.coolapk.market.view.main.MainActivity',
      ],
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '评论区广告|信息流广告',
          matches: 'ImageView[vid="close_view"]',
        },
      ],
    },
  ],
});
