// import 'style-loader!css-loader!./css/css-loader-demo.css'
import '../css/css-loader-demo.css'

export function introComponent(){
  const el = document.createElement('div')
  el.innerHTML = 'Violet Mio'
  el.className = 'content fz20'
  return el
}
