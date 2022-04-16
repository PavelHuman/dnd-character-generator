class Component {
  constructor({ root }) {
    this.root = root
    this.template = ''
  }

  clear() {
    this.root.innerHTML = ''
  }

  render() {
    this.clear()

    this.root.insertAdjacentHTML('afterbegin', this.template)
  }
}

export default Component
