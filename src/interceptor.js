/* eslint-disable no-continue */
// 在页面上插入代码
import { proxy } from 'ajax-hook-botshen'
proxy({
  onRequest: (config, handler) => {
    console.log('config', config)
  },
  onResponse: (response, handler) => {
    console.log('response', response)
  }
})
