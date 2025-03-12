import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 1,
      name: '信息流广告',
      activityIds: ['com.coolapk.market.view.feed.FeedDetailActivityV8'],
      rules: [
        {
          key: 0,
          name: '评论区信息流广告右上角关闭',
          matches:'ImageView[id="com.coolapk.market:id/close_view"]',
        }
      ],
    },
  ],
});
