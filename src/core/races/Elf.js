import { Race } from './Race.js'

export class Elf extends Race {

  languages = ['common', 'elvish']

  subraces = ['high', 'wood', 'dark']

  darkvision = {
    init() {
      this.darkvision.init(60)
    },
    state: true,
    description: 'Darkvision. Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray.',
    title: 'Darkvision',
    value: 0,
  }
  keenSenses = {
    title: 'Keen Senses',
    state: true,
    description: 'You have proficiency in the Perception skill.',
  }
  feyAncestry = {
    title: 'Fey Ancestry',
    state: true,
    description: 'You have advantage on saving throws against being charmed, and magic cant put you to sleep',
  }
  trance = {
    title: 'Trance',
    state: true,
    description: 'Elves dont need to sleep. Instead, theymeditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditationis "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
  }

  constructor(options = {}) {
    super(options)
    //this.darkvision.init(60)
    this.speed.init(30)
    this.abilityScoreIncrease.init({ dexterity: 2 })
  }
}
export const elf = new Elf()
