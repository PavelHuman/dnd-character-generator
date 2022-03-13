import Component from './Component.js'

class Character extends Component {

  constructor({ root, model }) {
    super({ root })
    this.model = model

    this.template = `
      <h2>Generated Character</h2>
  
      <div>
        <div>Name: ${this.model.name}</div>
        <div>Race: ${this.model.race}</div>
        <div>Subrace: ${this.model.subrace}</div>
        <div>Level: ${this.model.level}</div>
        <div>Experience Points: ${this.model.experiencePoints}</div>
        <div>Proficiency Bonus: ${this.model.proficiencyBonus}</div>
      </div>
    `
  }
}

export default Character
