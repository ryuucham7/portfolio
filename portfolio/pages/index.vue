<template>
  <div class="">
    <key-visual/>
    <div>
      <logo :user="test" :message="'ハロー'"/>
      <h1 class="title">
        portfolio
      </h1>
      <h2 class="subtitle">
        My badass Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          Test
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide } from 'vue-property-decorator'
  import Logo from '~/components/Logo.vue'
  import KeyVisual from '~/components/KeyVisual.vue'

  @Component({
    components: {
      Logo,
      KeyVisual
    }
  })
  export default class IndexPage extends Vue {
    @Provide() test: Object = { firstName: "Ryuta", lastName: 1 } //dataの記法　ここでも型付け（ここでいうとstring）が行える
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
