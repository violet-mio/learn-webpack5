import { introComponent } from './js/css-loader-demo'
import { PoetryComponent } from './js/less-loader-demo'
// 在构建工具中（webpack，rollup等），import xxx from 'vue'时，默认使用vue.runtime.esm-bundler.js, 不带有编译器功能，无法编译template的内容
// 所以这里使用vue.esm-bundler版本，带有编译器的才能解析template内容
// import { createApp } from 'vue/dist/vue.esm-bundler'
import { createApp } from 'vue'
import App from './App.vue'
import './js/img-demo'
import './js/iconfont-demo'
import { sum } from './js/sum'

document.body.appendChild(introComponent())
document.body.appendChild(PoetryComponent())
console.log(sum(233, 100))

// const app = createApp({
//   template: `
//     <p>这是一段vue内容{{msg}}</p>
//   `,
//   data() {
//     return {
//       msg: 'Hello Vue3'
//     }
//   }
// })

if(module.hot) {
  module.hot.accept('./js/less-loader-demo', () => {
    console.log('less-loader-demo模块更新了')
  })
}

const app = createApp(App)
app.mount('#app')
