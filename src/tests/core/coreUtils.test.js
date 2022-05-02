import { Race } from '../../core/races/Race.js'
import coreUtils from '../../core/coreUtils.js'
import { DwarfMixin } from '../../core/races/dwarf/DwarfMixin'
import { HillDwarfMixin } from '../../core/races/dwarf/HillDwarfMixin'

describe('coreUtils', () => {
  describe('applyMixins', () => {
    let applyMixins = null

    beforeEach(() => {
      applyMixins = jest.fn(coreUtils.applyMixins)
    })

    afterEach(() => {
      applyMixins = null
    })

    test('should return expected value', () => {
      const input = [Race, ...[DwarfMixin, HillDwarfMixin]]
      const expectedOutputKeys = Object.keys(new (HillDwarfMixin(DwarfMixin(Race)))())

      expect(Object.keys(new (applyMixins(...input))())).toEqual(expect.arrayContaining(expectedOutputKeys))
    })
  })
})
