import Entity from './Entity.js'
import { normalizeInput } from '../utils.js'


class Model {
  entity = new Entity()

  refresh(data = {}) {
    console.log('model.refresh', normalizeInput(data))
    const normalizedData = normalizeInput(data)
    this.entity = new Entity(normalizedData)
  }
}

export const model = new Model()
console.log(model)
