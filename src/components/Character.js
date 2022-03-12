import Component from "./Component.js"

class Character extends Component {
  constructor({ root, model }) {
    super({ root })
    this.model = model
  }

  render() {
    this.clear()

    const template = `
      <h2>Generated Character</h2>
      <div>Name: ${this.model.entity.name}</div>
      <div>Race: ${this.model.entity.race}</div>
    `

    this.root.insertAdjacentHTML('afterbegin', template)
  }
}

export default Character
