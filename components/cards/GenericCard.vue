<template>
  <div class="card">
    <div class="card-image">
      <component :is="link ? 'nuxt-link' : 'span'" :to="link">
        <figure :class="`image is-${imageRatioClass}`">
          <opti-image
            v-if="image"
            :src="responsiveImage.src"
            :srcset="responsiveImage.srcSet"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
            :sizes="`(min-width: 768px) ${100 / $siteConfig.posts.perRow}vw`"
          />
          <loading-spinner position="absolute" />
        </figure>
      </component>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <ul v-if="category.length" class="card-content__categories">
            <li
              v-for="(cat, index) in category"
              :key="index"
              class="categories__item"
              v-html="commaCat(cat, index)"
            ></li>
          </ul>
          <nuxt-link :to="link">
            <h3
              :class="
                `title
                is-5
                has-text-weight-light
                ${title ? '' : 'empty-content-placeholder'}`
              "
            >
              {{ title }}
            </h3>
            <h4
              :class="{
                subtitle: true,
                'is-6': true,
                'empty-content-placeholder': !$slots.default
              }"
            >
              <slot></slot>
            </h4>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const imageDimensionDefault = '16x9'
export default {
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    imageDimensions: { type: String, default: imageDimensionDefault },
    category: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions.toLowerCase().replace('x', 'by')
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000
        })
    },
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  },
  methods: {
    commaCat(cat, index) {
      if (index !== this.category.length - 1) return `${cat},&nbsp;`
      return cat
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  box-shadow: none;
}
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #eee;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}
.card-image {
  border-radius: 5px;
  overflow: hidden;
}
.card-content {
  padding: 15px;
}
</style>
<style lang="scss">
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
.card img {
  transition: 0.4s ease-in-out all;
  &:hover {
    transform: scale(1.02);
  }
}
.card-content__categories {
  margin-bottom: 5px;
}
.categories__item {
  font-size: 0.75em;
  display: inline-block;
  line-height: 1;
}
</style>
