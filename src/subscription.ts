import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 9527,
  name: 'Kwan的GKD订阅',
  version: 0,
  author: 'Kwan',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/kwanshih/subscription-gkd',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
