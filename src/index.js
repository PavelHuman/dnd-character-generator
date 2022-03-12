import Entity from './Entity.js'
import View from './View.js'

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

  const view = new View({
    model,
    root: document.getElementById('root'),
  })

  view.render()
}

