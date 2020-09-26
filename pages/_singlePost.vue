<template>
  <div id="post-page" class="page-wrapper post-page">
    <post-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <span
        v-if="author && $siteConfig.posts.displayAuthor"
        class="author-wrapper"
      >
        by {{ author }}
      </span>
      <span v-if="date" class="date-wrapper">
        {{ date }}
      </span>
    </post-hero>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="post-wrapper">
          <markdown :markdown="$store.state.content" />
          <div class="other-posts">
            <h6 class="subtitle is-size-4">
              Related Posts
            </h6>
            <!-- Related Posts -->
            <posts-grid :number="3" :category="category" :exclude="slug" />
          </div>
          <disqus-comments :identifier="$route.params.singlePost" />
        </div>
      </template>
      <template v-slot:sidebar>
        <post-sidebar />
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import PostSidebar from '~/components/PostSidebar'
import PostHero from '~/components/PostHero'
export default {
  components: {
    Markdown,
    PostSidebar,
    PostHero
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
      'featureImage',
      'underSubtitle',
      'author',
      'category',
      'slug'
    ]),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'post', slug: params.singlePost })
  }
}
</script>
<style scoped lang="scss">
.edit-post {
  margin-bottom: 20px;
}
.author-wrapper {
  margin-right: 10px;
  border-right: 1px solid #4a4a4a;
  padding-right: 10px;
}

.post-page {
  font-size: 1.125rem;
  .page-main-section {
    margin-top: 0;
    padding-top: 30px;
  }
}

.other-posts {
  margin-top: 50px;
  .subtitle {
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
</style>
<style lang="scss">
.post-page {
  .gif-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 56%;
    position: relative;
    margin-bottom: 1em;
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
