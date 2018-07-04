// translate router.meta.title, be used in breadcrumb sidebar tagsview   i18n国际化：https://segmentfault.com/a/1190000012779120
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  const translatedTitle = this.$t('route.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js

  if (hasKey) {
    return translatedTitle
  }
  return title
}
