import Entity from './Entity.js'

const entity = new Entity()

test('should have experiencePoints property', () => {
  expect(entity).toHaveProperty('experiencePoints')
})
