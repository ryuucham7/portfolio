<template>
  <div class="container-nav">
    <div class="header">
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <!-- <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a> -->

          <a role="button" :class="{'is-active': isActiveMenu}" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="clickMenu()">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{'is-active': isActiveMenu}">
          <div class="navbar-end is-size-5">

            <nuxt-link class="navbar-item has-text-orange"
              v-scroll-to="'#history'" to>
              About Me
            </nuxt-link>

            <a class="navbar-item"
              v-scroll-to="'#skills'" to>
              Skills
            </a>

            <a class="navbar-item has-text-orange"
              v-scroll-to="'#works'" to>
              Works
            </a>

            <a class="navbar-item"
              v-scroll-to="'#contacts'" to>
              Contacts
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Provide } from 'vue-property-decorator'

  @Component
  export default class NavBar extends Vue {

    @Provide()
    isActiveMenu: boolean = false

    clickMenu() {
      this.isActiveMenu = !this.isActiveMenu
    }
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

.navbar-item {
  padding: 0.75rem 1.5rem;
}

.navbar-menu {
  background-color: black;
}
</style>
