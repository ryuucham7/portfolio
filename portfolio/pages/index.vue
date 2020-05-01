<template>
  <div class="">
    <key-visual/>
    <div class="container-base">
      <history id="history" class="mt-128 pb-128"/>
      <skill-set id="skills" class="mt-128 pb-128"/>
      <works id="works" class="mt-128 pb-256"/>
      <contact id="contacts" class="mt-128 pt-128 pb-256"/>
    </div>
    <div id="page-top"
      v-if="position > 500">
      <nuxt-link class="button has-background-white is-circle"
        v-scroll-to="'body'"
        to
      >
        <fa icon="angle-up" area-hidden="true" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Provide } from 'vue-property-decorator'
  import Logo from '~/components/Logo.vue'
  import KeyVisual from '~/components/KeyVisual.vue'
  import History from '~/components/section/History.vue'
  import SkillSet from '~/components/section/SkillSet.vue'
  import Works from '~/components/section/Works.vue'
  import Contact from '~/components/section/Contact.vue'

  @Component({
    components: {
      Logo,
      KeyVisual,
      History,
      SkillSet,
      Works,
      Contact
    }
  })
  export default class IndexPage extends Vue {
    @Provide()
    test: Object = { firstName: "Ryuta", lastName: 1 } //dataの記法　ここでも型付け（ここでいうとstring）が行える
    position: number = 0;

    mounted() {
      const options = {
        threshold: [0.15, 1.0]
      }
      const target: any = document.querySelector('.fadein')
      const observer = new IntersectionObserver(this.addShowClass, options)
      // 監視したい要素をobserveする。
      observer.observe(target)

      if (!process.browser) return
      this.$nextTick(() => {
        window.addEventListener("scroll", this.handleScroll)
      })
    }

   handleScroll() {
     this.position = window.scrollY
   }

   addShowClass(entries: any) {
     for (const entry of entries) {
       console.log(entry.intersectionRatio)
       if (entry.intersectionRatio > 0.15) {
          // 100%
          entry.target.classList.add('scrollin')
        } else if (!entry.isIntersecting) {
          // 見えている領域が20%を下回ったとき
          entry.target.classList.remove('scrollin')
        }
     }
   }
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

#page-top {
  right: 22px;
  bottom: 22px;
  position: fixed;
}

#page-top a {
  color: black;
  cursor: pointer;
  text-align: center;
  border-radius: 30px;
  width: 45px;
  height: 45px;
  padding: 8px;
  font-size: 1.4rem;
}
</style>
