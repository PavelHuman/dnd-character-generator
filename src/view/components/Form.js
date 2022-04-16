import Component from './Component.js'

class Form extends Component {

  constructor({ root, model, onSubmit }) {
    super({ root })
    this.model = model
    this.onSubmit = onSubmit

    this.template = `
      <h2>Fill form to create D&D character</h2>
  
      <form data-form>
        <input type='text' name='name' placeholder='Name' value='${this.model.entity.name}' />
        <input type='text' name='race' placeholder='Race' value='${this.model.entity.race}' />
        <input type='text' name='subrace' placeholder='Subrace' value='${this.model.entity.subrace}' />
  
        <button type='submit'>Generate</button>
      </form>
    `
  }

  handleSubmit(event) {
    const [name, race, subrace] = event.target

    this.model.refresh({
      name: name.value,
      race: race.value,
      subrace: subrace.value,
    })
  }

  render() {
    super.render()

    this.root.querySelector('[data-form]').addEventListener(
      'submit',
      (event) => this.onSubmit(event, this.handleSubmit.bind(this)),
    )
  }
}

export default Form