import { model } from './Model.js'
import App from './App.js'

console.log("index.js")

window.addEventListener('load', initApp)

function initApp() {
  new App({
    model,
    root: document.getElementById('root'),
  }).render()
}

