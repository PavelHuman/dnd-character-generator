export default {
  shouldTraitExist(instance, trait) {
    test(`${trait.name} should exist`, () => {
      expect(instance).toHaveProperty(trait.name, trait.type)
    })
  },
  testRaceInstance({
    instance,
    constructors,
    traits,
  }) {
    describe(`${instance.name}`, () => {
      constructors.forEach(constructorFn => {
        test(`should be instance of ${constructorFn.name}`, () => {
          expect(instance.value).toBeInstanceOf(constructorFn)
        })
      })

      traits.forEach(trait => {
        describe(`${trait.name}`, () => {
          this.shouldTraitExist(instance.value, trait)
          trait?.test?.()
        })
      })
    })

  },
  getInitTraiteType(typeObject) {
    return expect.objectContaining({
      ...typeObject,
      init: expect.any(Function),
    })
  },

}



