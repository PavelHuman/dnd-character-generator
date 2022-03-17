class Dwarf {

  abilityScoreIncrease = { constitution: 2 }

  age = 200

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
    state: true,
    description: 'You have advantage on saving throws against poison, and you have resistance against poison damage (explained in chapter 9, "Combat")',
  }

  dwarvenCombatTraining = { title: 'Dwarven Combat Training', weapon: ['battle ax', 'hand ax', 'light hammer', 'war hammer'] }

  proficiency = {
    tools: ['blacksmith'],
  }

  stonecunning = {
    state: true,
    description: 'Whenever you make an Intelligence History check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus',
  }


  dwarvenToughness

  dwarvenArmorTraining

}
export const dwarf = new Dwarf()
