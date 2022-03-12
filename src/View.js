import Component from './components/Component.js'
import Character from "./components/Character.js"

class View extends Component {
  constructor({ model, root }) {
    super({ root })
    this.model = model
  }

  onSubmit(event) {
    event.preventDefault()
    const form = event.target
    console.log({ form })
    this.model.refresh({
      name: form.elements.name.value,
      race: form.elements.race.value,
    })

    console.log(this.model)

    this.render()
  }

  render() {
    this.clear()

    const template = `
      <div>
        <h2>Fill form to create D&D character</h2>

        <form data-form>
          <input type='text' name='name' placeholder='Name' value='${this.model.entity.name}' />
          <input type='race' name='race' placeholder='Race' value='${this.model.entity.race}' />

          <button type='submit'>Generate</button>
        </form>
      </div>

      <div data-character-container></div>
    `

    this.root.insertAdjacentHTML('afterbegin', template)

    const form = root.querySelector('[data-form]')
    form.addEventListener('submit', (event) => this.onSubmit(event))

    new Character({
      root: this.root.querySelector('[data-character-container]'),
      model: this.model,
    }).render()
  }
}

export default View
