<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <div v-for="category in categories" :key="category.slug">
          <div class="category-header">
            <h2 class="title animated fadeInUp">
              {{ category.name }}
            </h2>
            <nuxt-link :to="`/categories/${category.slug}/`">
              View more
            </nuxt-link>
          </div>
          <posts-grid :category="[category.name]" :number="3" />
        </div>
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  components: {
    NewsLetterFormModal
  },
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  data() {
    return {
      categories: []
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage']),
    resourceController() {
      return this.$cms.category
    }
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  },
  async created() {
    this.categories = await this.resourceController.getByPage(1)
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
.category-header {
  display: flex;
  align-items: flex-end;

  margin-bottom: 0.5rem;
}
.category-header > h2 {
  margin-right: 1rem;
  margin-bottom: 0 !important;
}
</style>
