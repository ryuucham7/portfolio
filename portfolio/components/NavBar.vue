<template>
  <div class="container-nav">
    <div class="header">
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item">
              History
            </a>

            <a class="navbar-item">
              Skills
            </a>

            <a class="navbar-item">
              Works
            </a>

            <a class="navbar-item">
              Contacts
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class NavBar extends Vue {

    // get fullName (): string {
    //   return `${this.user.firstName} ${this.user.lastName}`
    // }
  }
</script>

<style lang="scss" scoped>
.container-nav{
  background: black;
  .header{
    max-width: 1080px;
    margin: auto;
  }
}
</style>
