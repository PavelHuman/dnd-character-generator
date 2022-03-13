import Entity from './Entity.js'

class Model {
  entity = new Entity()

  refresh(data = {}) {
    console.log('model.refresh', data)
    this.entity = new Entity(data)
  }
}

export const model = new Model()
