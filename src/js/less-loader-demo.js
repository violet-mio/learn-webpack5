import '../css/less-loader-demo.less'

export function PoetryComponent(){
  const content = {
    title: '赠孟浩然',
    author: "李白",
    contson: [
      "吾爱孟夫子，风流天下闻。",
      "红颜弃轩冕，白首卧松云。",
      "醉月频中圣，迷花不事君。",
      "高山安可仰，徒此揖清芬。"
    ]
  }
  const el = document.createElement('div')
  el.innerHTML = `
    <div class='title'>${content.title}</div>
    <div class='author'>${content.author}</div>
    <div class='contentson'>${content.contson
      .map(item => `<div>${item}</div>`).join(' ')}
    </div>
  `
  el.className = 'poetry'
  return el
}
