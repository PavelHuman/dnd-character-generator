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
