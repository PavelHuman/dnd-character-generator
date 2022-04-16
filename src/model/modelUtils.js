export default {
  normalizeInput(input) {
    return JSON.parse(JSON.stringify(input).toLowerCase())
  },
}
