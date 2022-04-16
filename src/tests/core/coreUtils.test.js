import coreUtils from '../../core/coreUtils.js'

describe('applyMixins', () => {
  class Base { }
  const mixin1 = Base => class SomeClass1 extends Base { }
  const mixin2 = Base => class SomeClass2 extends Base { }

  const mixins = [mixin1, mixin2]

  const constructors = coreUtils.applyMixins(Base, ...mixins)

  const instance = new constructors[0]

  constructors.forEach(constructorFn => {
    test(`should be instance of ${constructorFn.name}`, () => {
      expect(instance).toBeInstanceOf(constructorFn)
    })
  })


})
