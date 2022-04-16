export default {
  applyMixins(Base, ...mixins) {
    return mixins.reduce((acc, mixin) => [
      mixin(acc[0]),
      ...acc,
    ], [Base])
  },
}
