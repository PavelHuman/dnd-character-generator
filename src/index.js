import { model } from './model/Model.js'
import App from './view/App.js'

window.addEventListener('load', initApp)

function initApp() {
  new App({
    model,
    root: document.getElementById('root'),
  }).render()
}

