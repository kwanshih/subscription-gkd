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
      activityIds: ['com.coolapk.market.view.feed.FeedDetailActivityV8'],
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '评论区信息流广告右上角关闭',
          matches: 'ImageView[vid="close_view"]',
          snapshotUrls: ''
        },
      ],
    },
  ],
});
