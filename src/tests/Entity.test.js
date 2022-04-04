import Entity from '../model/Entity.js'
import { hillDwarf } from '../core/races/HillDwarf.js'

const entity = new Entity()
describe('Entity', () => {
  test('should have experiencePoints property', () => {
    expect(entity).toHaveProperty('experiencePoints')
  })
  test('should have initRace property', () => {
    expect(entity).toHaveProperty('initRace', expect.any(Function))
  })

  describe('initRace', () => {
    test('should enrich entity with Hill Dwarf race instance', () => {
      const mockedEntity = {}

      entity.initRace.call(mockedEntity, 'dwarf', { subrace: 'hill dwarf' })

      expect(mockedEntity).toEqual(expect.objectContaining(hillDwarf))
    })
  })
})
