export function shouldTraitExist(instance, trait) {
  test(`${trait.name} should exist`, () => {
    expect(instance).toHaveProperty(trait.name, trait.type)
  })
}

export function testRaceInstance({
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
        shouldTraitExist(instance.value, trait)
        trait?.test?.()
      })
    })
  })

}

export const getInitTraiteType = typeObject => expect.objectContaining({
  ...typeObject,
  init: expect.any(Function),
})

export const mapObject = (object, callbackFn) => {
  return Object
    .entries(object)
    .reduce((acc, current, index) => {
      const [key, value] = current

      return {
        ...acc,
        [key]: callbackFn(value, index, object),
      }
    }, {})
}
