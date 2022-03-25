export const commonTraits = [
  {
    name: 'languages',
    type: expect.any(Array),
  },
  {
    name: 'size',
    type: expect.objectContaining({
      type: expect.any(String),
      value: expect.any(Number),
    }),
  },
  {
    name: 'speed',
    type: expect.any(Number),
  },
  {
    name: 'age',
    type: expect.any(Number),
  },
  {
    name: 'hitPointMaximumIncrease',
    type: expect.any(Number),
  },
  {
    name: 'alignment',
    type: expect.any(String),
  },
  {
    name: 'proficiency',
    type: expect.objectContaining({
      tools: expect.any(Array),
      weapon: expect.any(Array),
      armor: expect.any(Array),
    }),
  },
]
