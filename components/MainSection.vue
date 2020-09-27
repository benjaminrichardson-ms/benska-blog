<template>
  <main class="section page-main-section">
    <div class="container">
      <div class="columns">
        <aside
          v-if="computedTheme === 'sidebar-left'"
          class="column left-sidebar is-one-quarter"
        >
          <slot name="sidebar"></slot>
        </aside>
        <div
          :class="{
            column: true,
            'is-full': computedTheme === 'one-column' && !oneColumnConstrained,
            'is-offset-2':
              oneColumnConstrained && computedTheme === 'one-column',
            'is-8': oneColumnConstrained && computedTheme === 'one-column',
            'is-three-quarters': computedTheme !== 'one-column'
          }"
        >
          <slot></slot>
        </div>
        <aside
          v-if="computedTheme === 'sidebar-right'"
          class="column right-sidebar is-one-quarter"
        >
          <slot name="sidebar"></slot>
        </aside>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'MainSection',
  props: {
    oneColumnConstrained: { type: Boolean, default: false },
    theme: { type: String, default: '' }
  },
  computed: {
    computedTheme() {
      if (this.theme) {
        return this.theme
      }
      if (this.$siteConfig.layout.theme) {
        return this.$siteConfig.layout.theme
      }
      return 'one-column'
    }
  }
}
</script>

<style lang="scss">
.page-main-section {
  margin-top: 52px;
}
.hero + .page-main-section {
  margin-top: initial;
}
.is-one-quarter {
  padding: 0 20px;
  // &.right-sidebar {
  //   border-left: 1px solid #eee;
  // }
  // &.left-sidebar {
  //   border-right: 1px solid #eee;
  // }
  @media (max-width: 768px) {
    padding: 0 10px;
    margin-top: 40px;
  }

  &.right-sidebar {
    & > .subtitle {
      display: inline-block;
      position: relative;
      line-height: 1;
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 10px;
        background: #ddd;
        bottom: 0px;
        left: 4px;
        z-index: -1;
      }
    }
  }
}
</style>
