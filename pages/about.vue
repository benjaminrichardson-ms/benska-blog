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

          <!-- <quote-card /> -->

          <h3>What are we doing on the trip?</h3>
          <p>
            We both work Monday to Friday, but while we are not working, we'll
            be travelling from Canberra to Cairns, and back again. On the
            weekends we will be out exploring our new surrounds. During the week
            we'll be enjoying the places we end up and making sure we are
            somewhere interesting to make the most of the weekends.
          </p>

          <h3>How do you do this if you are working full-time?</h3>
          <p>
            We are working remotely for companies overseas. Our working hours
            start around midday so we can drive to the next town and have a
            little explore each morning. We only need to ensure we have internet
            coverage on each place, while the Prius is taking care of our power
            needs.
          </p>

          <h3>How do we sleep?</h3>
          <p>
            We put down boxes behind the front seat, put down the back seat and
            unroll our foam mattress.
          </p>

          <h3>How do we go to the toilet or shower?</h3>
          <p>
            We mostly stay in caravan parks, which has amenities. The free
            campsites or national parks also usually have a toilet block. We
            typically don't stay in sites with no shower amenities for two days
            in a row.
          </p>

          <h3>What do you eat?</h3>
          <p>
            We mostly cook since we brought a portable gas cooker and a rice
            cooker. Most caravan parks have a camp kitchen too. Our meal varies
            from something as simple as instant noodles or BBQ steak to Korean
            tteokbokki or Japanese curry. We also do eat out when we see
            interesting restaurants.
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
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
<style lang="scss">
.about-page {
  .content {
    max-width: 900px;
  }
}
</style>
