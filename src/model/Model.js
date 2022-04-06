import Entity from './Entity.js'

export class Model {

  entity = new Entity({
    race: 'dwarf',
    options: {
      subrace: 'hill dwarf',
    },
  })

}
export const model = new Model()
