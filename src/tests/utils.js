import { race } from '../core/races/Race.js'

export const shoMetEx = {
  shouldMethodExist(prop) {
    test('should exist', () => {
      expect(race).toHaveProperty(prop, expect.any(Function))
    })
  },
}


