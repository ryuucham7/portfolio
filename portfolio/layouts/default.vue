<template>
  <div>
    <nav-bar />
    <nuxt />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide } from 'vue-property-decorator'
  import NavBar from '~/components/NavBar.vue'

  @Component({
    components: {
      NavBar
    }
  })
  export default class Default extends Vue {}
</script>

<style>
html {
  font-family: 'Noto Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  background: black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Common */
.container-base {
  max-width: 1080px;
  margin: auto;
}

.container-section {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Color */
/* https://www.rapidtables.com/web/color/orange-color.html#code */
.has-text-orange {
  color: #FF7F50 !important;
}

/* Font */
.has-font-noto-serif {
  font-family: 'Noto Serif', sans-serif;
}

.has-font-muli {
  font-family: 'Muli', sans-serif;
}

.has-font-mincho {
  font-family: 'Sawarabi Mincho', sans-serif;
}

/* Margin */
.mt-8 {
  margin-top: 0.5rem;
}
.mt-12 {
  margin-top: 0.75rem;
}
.mt-16 {
  margin-top: 1rem;
}
.mt-24 {
  margin-top: 1.5rem;
}
</style>
