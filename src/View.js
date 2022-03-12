class View {
  constructor({ model }) {
    this.model = model
    this.root = document.getElementById('root')
  }

  onSubmit(event) {
    event.preventDefault()
    const form = event.target
    console.log({ form })
    this.model.refresh({
      data: {
        name: form.elements.name.value,
        race: form.elements.race.value,
      }
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

      <div>
        <h2>Generated Character</h2>
        <div>${this.model.entity.name}</div>
        <div>${this.model.entity.race}</div>
      </div>
    `

    this.root.insertAdjacentHTML('afterbegin', template)

    const form = root.querySelector('[data-form]')
    form.addEventListener('submit', this.onSubmit.bind(this))
  }

  clear() {
    this.root.innerHTML = ''
  }
}

export default View
