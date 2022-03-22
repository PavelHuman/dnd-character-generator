import { Race } from './Race.js'

const race = new Race()

const pureTrait = {
  state: expect.any(Boolean),
  title: expect.any(String),
  description: expect.any(String),
}

const sideEffectTrait = {
  ...pureTrait,
  applyIt: expect.any(Function),
}

const proficiencyTrait = {
  tools: expect.any(Array),
  weapon: expect.any(Array),
  armor: expect.any(Array),
}

const traitTypes = {
  array: { name: 'array', value: expect.any(Array) },
  number: { name: 'number', value: expect.any(Number) },
  string: { name: 'string', value: expect.any(String) },
  effect: { name: 'effect', value: sideEffectTrait },
  pure: { name: 'pure', value: pureTrait },
  proficiency: { name: 'proficiency', value: proficiencyTrait },
}

const commonTraits = [
  {
    name: 'abilityScoreIngrease',
    type: traitTypes.number,
  },
  {
    name: 'size',
    type: traitTypes.number,
  },
  {
    name: 'speed',
    type: traitTypes.number,
  },
  {
    name: 'age',
    type: traitTypes.number,
  },
  {
    name: 'subraces',
    type: traitTypes.number,
  },
  {
    name: 'alignment',
    type: traitTypes.string,
  },
  {
    name: 'languages',
    type: { name: 'array', value: traitTypes.array },
  },
]
const testTraitExisting = trait => {
  test('should exist', () => {
    expect(race).toHaveProperty(trait.name)
  })
}

const testTraitType = trait => {
  test(`should be ${trait.type.name}`, () => {
    switch (trait.type.name) {
      case 'number':
      case 'string':
      case 'proficiency':
      case 'pure':
      case 'effect': {
        expect(race[trait.name]).toEqual(trait.type.value)
        break
      }
      case 'array': {
        expect(Array.isArray(race[trait.name])).toEqual(true)
        break
      }
      default: return null
    }
  })
}


const testTrait = trait => {
  describe(`trait ${trait.name}`, () => {
    testTraitExisting(trait)
    testTraitType(trait)

    trait?.test?.()
  })
}

console.log(Race)

describe('Race', () => {
  [
    ...commonTraits,
  ].forEach(testTrait)
})
