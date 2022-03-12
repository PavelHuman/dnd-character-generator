import Entity from './Entity.js'
import View from './View.js'

console.log("index.js")

const model = {
  refresh(data) {
    console.log({ data })
    this.entity = new Entity({ data })
  }
}

window.addEventListener('load', initApp)

function initApp() {
  model.refresh()
  console.log({ model })

  const view = new View({ model })

  view.render()
}

