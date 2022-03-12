import Component from './components/Component.js'
import Character from "./components/Character.js"
import Form from './components/Form.js'

class App extends Component {
  constructor({ model, root }) {
    super({ root })
    this.model = model
  }

  onSubmit(event, callback) {
    event.preventDefault()

    callback(event)

    this.render()
  }

  render() {
    this.clear()

    const template = `
      <div>
        <div data-form-container></div>
        <div data-character-container></div>
      </div>
    `

    this.root.insertAdjacentHTML('afterbegin', template)

    new Form({
      root: this.root.querySelector('[data-form-container]'),
      model: this.model,
      onSubmit: this.onSubmit.bind(this),
    }).render()

    new Character({
      root: this.root.querySelector('[data-character-container]'),
      model: this.model.entity,
    }).render()
  }
}

export default App
