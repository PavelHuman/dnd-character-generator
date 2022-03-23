import { Race } from '../core/races/Race.js'

const race = new Race()

const traits = [
  {
    name: 'languages',
    type: expect.any(Array),
  },
  {
    name: 'size',
    type: expect.objectContaining({
      type: expect.any(String),
      value: expect.any(Number),
    }),
  },
  {
    name: 'speed',
    type: expect.any(Number),
  },
  {
    name: 'age',
    type: expect.any(Number),
  },
  {
    name: 'hitPointMaximumIncrease',
    type: expect.any(Number),
  },
  {
    name: 'alignment',
    type: expect.any(String),
  },
  {
    name: 'proficiency',
    type: expect.objectContaining({
      tools: expect.any(Array),
      weapon: expect.any(Array),
      armor: expect.any(Array),
    }),
  },
]

describe('race', () => {
  test('should be instance of Race', () => {
    expect(race).toBeInstanceOf(Race)
  })

  traits.forEach(trait => {
    test(`should exist trait ${trait.name}`, () => {
      expect(race).toHaveProperty(trait.name, trait.type)
    })
  })



})
