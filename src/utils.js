export function preserveData(dndData) {
  localStorage.setItem('dnd', JSON.stringify(entity))

  const dnd = localStorage.getItem('dnd')
  console.log({ dnd: JSON.parse(dnd) })

}
