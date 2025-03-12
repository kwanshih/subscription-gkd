import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '升级提醒',
      desc: '关闭升级提醒',
      enable: false,
      matchRoot: true,
      activityIds: [],
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '升级提醒',
          matches: 'ImageButton[vid="md_dialog_cm_close_btn"]',
        },
      ],
    },
  ],
});
