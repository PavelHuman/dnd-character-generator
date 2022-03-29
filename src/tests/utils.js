export function shouldTraitExist(instance, trait) {
  test(`${trait.name} should exist`, () => {
    expect(instance).toHaveProperty(trait.name, trait.type)
  })
}

export function testInstance({
  instance,
  constructorFn,
  traits,
}) {
  describe(`${instance.name}`, () => {
    test(`should be instance of ${constructorFn.name}`, () => {
      expect(instance.value).toBeInstanceOf(constructorFn.value)
    })

    traits.forEach(trait => {
      describe(`${trait.name}`, () => {
        shouldTraitExist(instance.value, trait)
        trait?.test?.()
      })
    })
  })

}
