<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="About Us"
      subtitle="Chronicaling the adventures of Jam and Ska around Australia"
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>What is this site about?</h3>
          <p>
            This is a personal blogging site to list out our thoughts and
            musings as we travel around Australia during the Covid-19 recovery
            period in mid-2020.
          </p>

          <h3>How are we travelling?</h3>
          <p>
            We are setting off on our second trip now in our 2009 Toyota Prius
            that we have converted to be our comfy home for up to 2 months at a
            time as we travel far and wide across Australia.
          </p>

          <quote-card />

          <h3>What are we doing on the trip?</h3>
          <p>
            We both work Monday to Friday, but while we are not working we'll be
            travelling from Canberra to Cairns, and back agian. On the weekends
            we will be out exploring our new surrounds. During the week we'll be
            enjoying the places we end up, and making sure we are somewhere
            interesting to make the most of the weekends.
          </p>
        </div>

        <!-- <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Cool Stuff We Do
              </p>
              <p class="subtitle">
                Sooo Cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Other Cool Things
              </p>
              <p class="subtitle">
                Just as cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                All the cool
              </p>
              <p class="subtitle">
                that is all
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
        </div> -->
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
