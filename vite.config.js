/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-08 15:38:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-15 17:37:44
 * @FilePath: \basic\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// 注意：使用的 Vite，你可以使用unplugin-vue-components来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：

// import { message } from 'ant-design-vue';
// import 'ant-design-vue/es/message/style/css';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      viteMockServe({
        mockPath: "./src/mock", // 解析，路径可根据实际变动
        localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
      }),
      resolve(),
      commonjs()
    ],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      host: '0.0.0.0',
      port: '6003',
      proxy: { 
        '/api': {
          target: 'http://api.freight.works/',  //你要跨域访问的网址
          changeOrigin: true,   // 允许跨域
          rewrite: (path) => path.replace(/^\/api/, '') // 重写路径把路径变成空字符
        }
      }
    },
    css: {
      preprocessorOptions:{
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    },
    define: {
      'process.env': env
    }
  }
})
