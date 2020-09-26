<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.posts.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
        null
    "
    :category="category"
  >
    <span
      v-if="author && $siteConfig.posts.displayAuthor"
      class="author-wrapper"
    >
      by {{ author }}
    </span>
    <span v-if="date" class="date-wrapper">
      {{ datePretty }}
    </span>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
import { getFormattedDate } from '~/helper'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    category: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    }
  }
}
</script>
<style scoped lang="scss">
.author-wrapper {
  margin-right: 8px;
  border-right: 1px solid #4a4a4a;
  padding-right: 10px;
}
.author-wrapper,
.date-wrapper {
  display: inline-block;
  line-height: 1;
}
</style>
