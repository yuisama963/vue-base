/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-08 15:38:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-24 16:35:51
 * @FilePath: \basic\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// 注意：使用的 Vite，你可以使用unplugin-vue-components来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：

// import { message } from 'ant-design-vue';
// import 'ant-design-vue/es/message/style/css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    })
  ],
  resolve: {
		alias: {
			'@': '/src'
		}
	},
  server: {
    port: '0603'
  }
})
