export const pureTrait = {
  state: expect.any(Boolean),
  title: expect.any(String),
  description: expect.any(String),
}

export const sideEffectTrait = {
  ...pureTrait,
  applyIt: expect.any(Function),
}
