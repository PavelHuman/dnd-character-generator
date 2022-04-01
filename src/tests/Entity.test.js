import Entity from '../model/Entity.js'

const entity = new Entity()
describe('Entity', () => {
  test('should have experiencePoints property', () => {
    expect(entity).toHaveProperty('experiencePoints')
  })
})
