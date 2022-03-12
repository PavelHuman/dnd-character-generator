import Entity from './Entity.js'
import App from './App.js'

console.log("index.js")

const model = {
  refresh(data = {}) {
    console.log('model.refresh', { data })
    this.entity = new Entity({ data })
  }
}

window.addEventListener('load', initApp)

function initApp() {
  model.refresh()

  new App({
    model,
    root: document.getElementById('root'),
  }).render()
}

