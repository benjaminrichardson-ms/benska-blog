<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in Category -->
        <posts-grid :category="[$store.state.name]" :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          All Categories
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/categories/${cat.slug}/`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            <span>{{ cat.name }}</span>
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  data() {
    return {
      allCats: []
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'category', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>
<style lang="scss">
.category-page {
  .right-sidebar {
    .panel-heading:first-child,
    .panel-tabs:first-child,
    .panel-block:first-child {
      border-top: 0;
    }
    .panel-heading,
    .panel-tabs,
    .panel-block {
      border-left: 0;
      border-right: 0;
      &:hover {
        background: none;
      }
      &.is-active,
      &:hover {
        span {
          &::after {
            transform: scaleX(1);
          }
        }
      }
      span {
        position: relative;
        line-height: 1;
        display: inline-block;
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 10px;
          background: $yellow;
          bottom: -2px;
          left: 4px;
          z-index: -1;
          transform: scaleX(0);
          transform-origin: left top;
          transition: transform 0.25s ease-in-out;
        }
      }
    }
    .panel-block {
      padding-left: 0;
    }
  }
}
</style>
