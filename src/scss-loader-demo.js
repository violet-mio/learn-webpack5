import './css/scss-loader-demo.scss'

export function PoetryComponent2(){
  const content = {
    title: '月夜',
    author: "杜甫",
    contson: [
      "今夜鄜州月，闺中只独看。",
      "遥怜小儿女，未解忆长安。",
      "香雾云鬟湿，清辉玉臂寒。",
      "何时倚虚幌，双照泪痕干。"
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
  el.className = 'poetry2'
  return el
}
