<template>
  <div class="container-section pd-16">
    <div class="contents">
      <h2
        class="subtitle has-font-noto-serif has-text-white has-text-centered">
        Skills
      </h2>

      <div class="columns has-text-centered is-variable is-5">
        <div class="skill-box column">
          <span class="box-title is-size-4">Mobile</span>
          <img class="mr-16" src="@/assets/img_kotlin.png" height="64" width="64">
          <img class="mr-16" src="@/assets/img_android_java.png" height="64" width="64">
          <img src="@/assets/img_swift.png" height="64" width="64">
        </div>
        <div class="skill-box column">
          <span class="box-title is-size-4">Front End</span>
          <img class="mr-16" src="@/assets/img_html.png" height="64" width="64">
          <img class="mr-16" src="@/assets/img_css.png" height="64" width="64">
          <img class="mr-16" src="@/assets/img_vue.png" height="64" width="64">
          <img class="mr-16" src="@/assets/img_nuxt.png" height="64" width="64">
          <img class="mr-16" src="@/assets/img_react.png" height="64" width="64">
          <img src="@/assets/img_ts.png" height="64" width="64">
        </div>
        <div class="skill-box column">
          <span class="box-title is-size-4">Back End etc..</span>
          <img class="mr-16" src="@/assets/img_java.png" height="64" width="64">
          <img class="backend-img" src="@/assets/img_rails.png">
          <img class="mr-16" src="@/assets/img_gcp.png" height="64" width="64">
          <img class="mr-16" src="@/assets/img_aws.png" height="64" width="64">
          <img src="@/assets/img_firebase.png" height="64" width="64">
          <img src="@/assets/img_mysql.png" height="64" width="64">
        </div>
      </div>

      <!-- Mobile Native -->
      <h3 class="has-font-noto-serif has-text-white has-text-centered is-size-3 is-size-4-mobile mt-64">
        Native Mobile App
      </h3>
      <div class="columns is-centered is-mobile is-multiline mt-64">
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 80, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">80%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_android_java.png" height="24" width="24">
            Android Java
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 60, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">60%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_kotlin.png" height="24" width="24">
            Kotlin
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 70, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">70%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_swift.png" height="24" width="24">
            Swift
          </p>
        </div>
      </div>

      <!-- Front End -->
      <h3 class="has-font-noto-serif has-text-white has-text-centered is-size-3 is-size-4-mobile mt-128">
        Front End
      </h3>
      <div class="columns is-centered is-mobile is-multiline mt-64">
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 90, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">90%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_html.png" height="24" width="24">
            HTML5
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 80, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">80%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_css.png" height="24" width="24">
            CSS3
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 90, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">90%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_vue.png" height="24" width="24">
            Vue.js
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 90, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">90%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_nuxt.png" height="24" width="24">
            Nuxt.js
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 70, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">70%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_ts.png" height="24" width="24">
            TypeScript
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 50, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">50%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_react.png" height="24" width="24">
            React.js
          </p>
        </div>
      </div>

      <!-- Back End & Infra -->
      <h3 class="has-font-noto-serif has-text-white has-text-centered is-size-3 is-size-4-mobile mt-128">
        {{ "Back End & Infra etc" }}
      </h3>
      <div class="columns is-centered is-mobile is-multiline mt-64">
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 80, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">80%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_java.png" height="24" width="24">
            Java
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 80, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">80%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-8" src="@/assets/img_rails.png" height="96" width="64">
            Ruby on Rails
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 70, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">70%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_gcp.png" height="24" width="24">
            GCP
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 60, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">60%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_aws.png" height="24" width="24">
            AWS
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 70, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">70%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_firebase.png" height="24" width="24">
            Firebase
          </p>
        </div>
        <div class="column is-6-mobile is-4-desktop is-4-tablet has-text-centered">
          <vc-donut
            foreground="grey"
            background="#222021"
            :size="150"
            :thickness="30"
            :sections="[{ label: '', value: 80, color: '#FF7F50' }]"
            :auto-adjust-text-size="true">
            <span class="is-size-5 has-text-white has-text-weight-bold">80%</span>
          </vc-donut>
          <p class="container-language has-text-centered has-text-white mt-16 is-size-5">
            <img class="mr-12" src="@/assets/img_mysql.png" height="24" width="24">
            My SQL
          </p>
        </div>
      </div>
      <p class="has-text-font-muli has-text-orange mt-16">
      </p>
    </div>
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop, Provide } from 'vue-property-decorator'

  @Component
  export default class SkillSet extends Vue {
    @Prop({ type: String, required: false }) readonly message!: String

    @Provide()
    percent: String = '25'
    sections: Array<Object> = [{ value: 25 }, { value: 25 }]
    // get fullName (): string {
    //   return `${this.user.firstName} ${this.user.lastName}`
    // }
  }
</script>

<style lang="scss" scoped>
.container-section {
  background: #222021;
  padding-top: 6rem;
  .contents {
    margin: auto;
    max-width: 1080px;
  }
}

.container-language {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-box {
  position: relative;
  margin: 2em 0;
  padding: 1.5rem;
  border: solid 3px white;
  border-radius: 8px;
  margin-left: 1rem;
  margin-right: 1rem;
  animation-duration: 2s;
  animation-name: SlideLeftToRight;
  /* 繰り返し */
  /* animation-iteration-count: infinite; */
}

.backend-img {
  width: 182px;
  height: 64px;
}

.skill-box .box-title {
  position: absolute;
  display: inline-block;
  top: -0.8rem;
  left: 0.8rem;
  padding: 0 0.7rem;
  line-height: 1;
  background: #222021;
  color: #FF7F50;
  font-weight: bold;
}

.is-vertical-center {
  vertical-align: middle;
}

@keyframes SlideLeftToRight {
  0% {
    opacity: 0;/* 透明 */
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;/* 不透明 */
    transform: translateX(0px);
  }
}

</style>
