class Component {
  constructor({ root }) {
    this.root = root
  }

  clear() {
    this.root.innerHTML = ''
  }
}

export default Component
