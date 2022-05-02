export default {
  applyMixins(BaseClass, ...mixins) {
    return mixins.reduce((acc, currentMixin) => currentMixin(acc), BaseClass)
  },
}
