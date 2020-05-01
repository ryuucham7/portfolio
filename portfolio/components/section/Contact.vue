<template>
  <div class="container-section">
    <div class="contents has-text-centered">
      <h2 class="subtitle has-font-noto-serif has-text-white">
        Contacts
      </h2>
      <p class="has-text-white is-size-4 is-size-5-mobile">
        Feel free to send a message !!
      </p>
      <div class="columns is-mobile mt-40 is-centered">
        <div class="column is-2">
          <a href="https://www.facebook.com/ryuucham07">
            <img class="mr-16" src="@/assets/img_facebook.png" height="64" width="64">
          </a>
        </div>
        <div class="column is-2">
          <a href="https://twitter.com/ryuuchamfree">
            <img class="mr-16" src="@/assets/img_twitter.png" height="64" width="64">
          </a>
        </div>
        <div class="column is-2">
          <a href="https://www.linkedin.com/in/ryuta-sato-578b5110b/">
            <img class="mr-16" src="@/assets/img_linked_in.png" height="64" width="64">
          </a>
        </div>
        <div class="column is-2">
          <a href="mailto:ryuucham07.free@gmail.com">
            <img class="mr-16" src="@/assets/img_mail.png" height="64" width="64">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Contact extends Vue {
  }
</script>

<style lang="scss" scoped>
.container-section {
  background: #222021;
  animation-duration: 4s;
  animation-name: Effect;
}
</style>
