export class Dwarf {

  abilityScoreIncrease = { constitution: 2 }

  arrayContaining = ['light', 'medium']

  age = 200

  hitPointMaximumIncrease = 0

  alignment = 'fair'

  size = 140

  speed = 25

  languages = ['common', 'dwarvish']

  subraces = ['hill', 'mountain']

  darkvision = {
    state: true,
    description: 'Accustomed to life underground, uoy have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray.',
    title: 'Darkvision',
  }

  dwarvenResilience = {
    title: 'Dwarven Resilience.',
    state: true,
    description: 'You have advantage on saving throws against poison, and you have resistance against pzoison damage (explained in chapter 9, "Combat")',
  }

  dwarvenCombatTraining = {
    applyIt() {
      const weapon = ['battleaxe', 'handaxe', 'light hammer', 'warhammer']
      this.proficiency.weapon = weapon
    },
    state: true,
    title: 'Dwarven Combat Training',
    description: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
  }

  proficiency = {
    tools: ['blacksmith'],
    armor: [],
    weapon: [],
  }

  stonecunning = {
    title: 'Stonecunning.',
    state: true,
    description: 'Whenever you make an Intelligence History check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check,instead of your normal proficiency bonus',
  }


  dwarvenToughness = {
    applyIt: function () {
      const toughness = 0
      for (let i = 0; i < 3; i++) {
        return toughness
      }
    },
    description: ' Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.', state: true, title: 'Dwarven Toughness',
  }

  dwarvenArmorTraining = {
    applyIt: function () {
      const expectedArmor = ['light', 'medium']
      this.proficiency.armor = expectedArmor
    },
    description: 'You have proficiency with light and medium armor', state: true, title: 'Dwarven Armor Training.'
  }

  constructor() {
    this.dwarvenCombatTraining.applyIt.call(this)
    this.dwarvenToughness.applyIt.call(this)
    this.dwarvenArmorTraining.applyIt.call(this)
  }

}
export const dwarf = new Dwarf()
