import Component from './Component.js'

class Character extends Component {

  constructor({ root, model }) {
    super({ root })
    this.model = model

    // TODO: make character's value select like
    // TODO: map entity props in character view
    // TODO: add test for utils functions
    // TODO: realize preserve data with localStorage

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

      <label for="race-select">Race:</label>

      <select name="races" id="race-select">
          <option value="">--Please choose an race--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
      </select>

    `
  }
}

export default Character
