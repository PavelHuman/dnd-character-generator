import { dwarf } from './core/races/Dwarf.js'
import Entity from './model/Entity.js'
import { race } from './core/races/Race.js'
import { hillDwarf } from './core/races/HillDwarf.js'
import { Model } from '../model/Model.js'

console.log(hillDwarf)
console.log(race)
console.log(dwarf)

const model = new Model()
console.log(model)

const entity = new Entity()
console.log(entity)
