export function preserveData(dndData) {
  localStorage.setItem('dnd', JSON.stringify(entity))

  const dnd = localStorage.getItem('dnd')
  console.log({ dnd: JSON.parse(dnd) })

}

export const normalizeInput = (input) => JSON.parse(JSON.stringify(input).toLowerCase())
export const upperFirst = (input) => input.split(' ')
  .map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
