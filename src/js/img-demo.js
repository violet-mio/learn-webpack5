import avatorPic from '../img/02.jpg'
import "../css/img-demo.css"

const imageEle = new Image()
imageEle.src = avatorPic
imageEle.style.width = "200px"

const box = document.createElement("div")
box.style.cssText = `
  width: 300px;
  height: auto;
  display: inline-block;

`
box.className = "box"
box.appendChild(imageEle)
document.body.appendChild(box)
