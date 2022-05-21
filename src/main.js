import { introComponent } from './js/css-loader-demo'
import { PoetryComponent } from './js/less-loader-demo'
import './js/img-demo'
import './js/iconfont-demo'
import { sum } from './js/sum'

document.body.appendChild(introComponent())
document.body.appendChild(PoetryComponent())
console.log(sum(233, 100))
