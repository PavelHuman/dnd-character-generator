import Entity from './Entity.js'
import modelUtils from './modelUtils.js'


export class Model {
  entity = new Entity()

  refresh(data = {}) {
    console.log('model.refresh', modelUtils.normalizeInput(data))
    const normalizedData = modelUtils.normalizeInput(data)
    this.entity = new Entity(normalizedData)
  }
}

export const model = new Model()
