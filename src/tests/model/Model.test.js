import { Model } from '../../model/Model.js'
import Entity from '../../model/Entity.js'

const model = new Model()

describe('model', () => {
  test('should be instance of Model', () => {
    expect(model).toBeInstanceOf(Model)
  })

  test('should has entity property', () => {
    expect(model).toHaveProperty('entity', expect.any(Object))
  })

  describe('entity', () => {
    test('should be instance of Entity', () => {
      expect(model.entity).toBeInstanceOf(Entity)
    })
  })
})
