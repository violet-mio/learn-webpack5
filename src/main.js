import { introComponent } from './css-loader-demo'
import { PoetryComponent } from './less-loader-demo'
import { PoetryComponent2 } from './scss-loader-demo'

// const helloEl = document.createElement('div')
// helloEl.innerHTML = '<h1>Hello World! </h1>'

// document.body.appendChild(helloEl)
document.body.appendChild(introComponent())
document.body.appendChild(PoetryComponent())
document.body.appendChild(PoetryComponent2())
