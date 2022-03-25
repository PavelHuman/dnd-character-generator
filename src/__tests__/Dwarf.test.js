import { Dwarf } from '../core/races/Dwarf.js'
import { commonTraits } from './types.js'

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

const specificTraits = [
  {
    name: 'dwarvenCombatTraining',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expeceted weapon to proficency property', () => {
          const dwarfMockedInstance = {
            proficiency: {
              weapon: [],
            },
          }
          dwarf[this.name].applyIt.call(dwarfMockedInstance)

          const expectedWeapon = ['battleaxe', 'handaxe', 'light hammer', 'warhammer']
          expect(dwarfMockedInstance.proficiency.weapon).toEqual(
            expect.arrayContaining(expectedWeapon),
          )
        })
      })
    },
  },
  {
    name: 'dwarvenToughness',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expeceted increase hit point maximum by 1', () => {
          const dwarfMockedInstance = {
            hitPointMaximumIncrease: 0,
          }

          dwarf[this.name].applyIt.call(dwarfMockedInstance)

          expect(dwarfMockedInstance.hitPointMaximumIncrease).toEqual(dwarf.hitPointMaximumIncrease)
        })
      })
    },
  },
  {
    name: 'dwarvenArmorTraining',
    type: sideEffectTrait,
    test() {
      // console.log(dwarf.proficiency)
      describe(`${this.name} effect`, () => {
        test('should add expeceted armor to proficency property', () => {
          const dwarfMockedInstance = {
            proficiency: {
              armor: [],
            },
          }
          dwarf[this.name].applyIt.call(dwarfMockedInstance)

          const expectedArmor = ['light', 'medium']
          expect(dwarfMockedInstance.proficiency.armor).toEqual(
            expect.arrayContaining(expectedArmor),
          )
        })
      })
    },
  },
  {
    name: 'darkvision',
    type: pureTrait,
  },
  {
    name: 'dwarvenResilience',
    type: pureTrait,
  },
  {
    name: 'stonecunning',
    type: pureTrait,
  },
]

const testTraitExisting = trait => {
  test('should exist', () => {
    expect(dwarf).toHaveProperty(trait.name, trait.type)
  })
}



function testTrait(trait) {
  describe(`trait ${trait.name}`, () => {
    testTraitExisting(trait)

    trait?.test?.()
  })
}

// console.log(Dwarf)

describe('Dwarf', () => {
  [
    ...commonTraits,
    ...specificTraits,
  ].forEach(testTrait)
})

