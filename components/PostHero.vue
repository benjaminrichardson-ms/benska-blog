<template>
  <section :class="`post-hero is-medium post-hero-theme-${computedTheme}`">
    <div class="post-hero-body">
      <div class="container">
        <div v-if="$slots.default" class="under-subtitle">
          <slot />
        </div>
        <h1 class="title animated fadeInUp">
          {{ title }}
        </h1>
        <h2 class="subtitle animated fadeInUp slower">
          <!-- <span class="subtitle__highlight"></span> -->
          <span>{{ subtitle }}</span>
        </h2>
      </div>
    </div>
    <img
      class="post-hero-bg-img"
      :src="responsiveImage.src"
      :lazy="false"
      :srcset="responsiveImage.srcSet"
    />
  </section>
</template>
<script>
export default {
  name: 'PostHero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
    color: { type: String, default: '#469af0' },
    theme: { type: String, default: '' }
  },
  computed: {
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    },
    computedTheme() {
      if (this.theme === '' && this.$siteConfig.hero.theme) {
        return this.$siteConfig.hero.theme
      }
      return this.theme || 'mist'
    }
  }
}
</script>

<style lang="scss" scoped>
.post-hero {
  // margin-top: 52px;
  max-width: calc(100% - 40px);
  text-align: center;
  margin: 20px auto;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
}

.title {
  font-family: 'Caveat Brush', cursive;
  font-weight: 400;
  margin: 0 auto 5px;
  @media (min-width: 768px) {
    font-size: 3rem;
    max-width: 80%;
  }
}
.subtitle,
.under-subtitle {
  padding: 0;
  margin: 0;
}
.subtitle {
  font-size: 1.125rem;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  position: relative;
  display: inline-block;
  text-shadow: none;
  color: black;

  span {
    position: relative;
    display: block;
  }

  // .subtitle__highlight {
  //   position: absolute;
  //   background: $yellow;
  //   width: 100%;
  //   display: block;
  //   height: 8px;
  //   left: 3px;
  //   bottom: 1px;
  //   transform: scaleX(0);
  //   transform-origin: left top;
  //   animation-name: scaleIn;
  //   animation-duration: 3s;
  //   animation-delay: 2s;
  //   animation-fill-mode: both;
  // }
}

@keyframes scaleIn {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
.under-subtitle {
  display: inline-block;
  font-size: 0.8rem;
  padding-top: 5px;
}
.opti-image {
  opacity: 0;
}
.opti-image-loaded {
  opacity: 0.12;
  animation: blurIn 4.5s ease;
}
.post-hero {
  .opti-image {
    opacity: 0;
  }
  .opti-image-loaded {
    opacity: 1;
  }
  .post-hero-body {
    margin: 100px auto 30px;

    @media (min-width: 768px) {
      margin-top: 130px;
    }
  }
}
.post-hero-theme-mist {
  .opti-image-loaded {
    opacity: 0.12;
    animation: blurInGrayscale 4.5s ease;
  }
}
.post-hero-theme-dark,
.post-hero-theme-light {
  .post-hero-body {
    position: relative;
    z-index: 2;
  }
}
.post-hero-theme-light.post-hero {
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    color: white;
  }
}
.post-hero-bg-img {
  max-width: 1000px;
  width: 100%;
}
</style>
