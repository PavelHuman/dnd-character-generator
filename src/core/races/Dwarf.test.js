import { Dwarf } from './Dwarf.js'

// 5. добавить чертам, которые влияют на какие-то параметры метод applyIt в котором будут применяться эти параметры. Вызывать метод applyIt в конструкторе класса Dwarf #38
const dwarf = new Dwarf()

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
    name: 'languages',
    type: { name: 'array', value: traitTypes.array },
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
    name: 'alignment',
    type: traitTypes.string,
  },
  {
    name: 'proficiency',
    type: traitTypes.proficiency,
  },
]

const specificTraits = [
  {
    name: 'dwarvenCombatTraining',
    type: traitTypes.effect,
  },
  {
    name: 'darkvision',
    type: traitTypes.pure,
  },
  {
    name: 'dwarvenResilience',
    type: traitTypes.pure,
  },
  {
    name: 'stonecunning',
    type: traitTypes.pure,
  },
]

const testTraitExisting = trait => {
  test('should exist', () => {
    expect(dwarf).toHaveProperty(trait.name)
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
        expect(dwarf[trait.name]).toEqual(trait.type.value)
        break
      }
      case 'array': {
        expect(Array.isArray(dwarf[trait.name])).toEqual(true)
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

    if (trait.name === 'proficiency') {
      console.log(trait)
      const expectedWeapon = ['battleaxe', 'handaxe', 'light hammer', 'warhammer']
      test(`shoule contains expected Weapon: ${expectedWeapon}`, () => {
        expect(dwarf.proficiency.weapon).toEqual(
          expect.arrayContaining(expectedWeapon),
        )
      })
    }
  })
}

describe('Dwarf', () => {
  [
    ...commonTraits,
    ...specificTraits,
  ].forEach(testTrait)
})

