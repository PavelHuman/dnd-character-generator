import { model } from './model/Model.js'
import App from './view/App.js'

console.log("index.js")

window.addEventListener('load', initApp)

function initApp() {
  new App({
    model,
    root: document.getElementById('root'),
  }).render()
}

