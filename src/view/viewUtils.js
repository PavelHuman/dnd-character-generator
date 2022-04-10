export default {
  // preserveData(dndData) {
  //   localStorage.setItem('dnd', JSON.stringify(entity))

  //   const dnd = localStorage.getItem('dnd')
  //   console.log({ dnd: JSON.parse(dnd) })

  // },

  upperFirst(input) {
    return input.split(' ')
      .map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
  },
}



