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

<style lang="scss">
html {
  font-family: 'Noto Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  background: black;
}

body {
    overflow-y: scroll;
    overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Common */
.container-base {
  margin: auto;
}

.container-section {
  padding-left: 1rem;
  padding-right: 1rem;
}


@media (min-width: 768px){
  .contents {
    margin: auto;
    max-width: 1080px;
  }
}

/* Image */
.image.is-256x256 {
  height: 256px;
  width: 256px;
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

.has-font-ozwald {
  font-family: 'Ozwald', sans-serif;
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
.mt-40 {
  margin-top: 2.5rem;
}
.mt-64 {
  margin-top: 4rem;
}
.mt-128 {
  margin-top: 8rem;
}
.mt-256 {
  margin-top: 16rem;
}

.mb-64 {
  margin-bottom: 4rem;
}
.mb-128 {
  margin-bottom: 8rem;
}
.mb-256 {
  margin-bottom: 16rem;
}

.mr-8 {
  margin-right: 0.5rem;
}
.mr-16 {
  margin-right: 1rem;
}

/* Padidng */
.pd-8 {
  padding: 0.5rem;
}
.pd-16 {
  padding: 1rem;
}

.pt-64 {
  padding-top: 4rem;
}
.pt-128 {
  padding-top: 8rem;
}

.pb-16 {
  padding-bottom: 1rem;
}
.pb-128 {
  padding-bottom: 8rem;
}
.pb-256 {
  padding-bottom: 16rem;
}

.fadein {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1.0s, transform 0.8s;

  &.scrollin {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation */
@keyframes Effect {
  0% {
    opacity: 0;/* 透明 */
    transform: translateZ(-150px);
  }
  100% {
    opacity: 1;/* 不透明 */
    transform: translateZ(0px);
  }
}
</style>
