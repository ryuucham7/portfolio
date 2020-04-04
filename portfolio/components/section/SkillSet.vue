<template>
  <div class="container-section">
    <h2 class="subtitle has-font-noto-serif has-text-orange mt-24 is-size-4-mobile">
      Skill Set
    </h2>
    <div class="skill-box">
      <span class="box-title is-size-4">Front-End</span>
      <img src="@/assets/img_kotlin.png" height="64" width="64">
      <img src="@/assets/img_android_java.png" height="64" width="64">
      <img src="@/assets/img_swift.png" height="64" width="64">
      <img src="@/assets/img_html.png" height="64" width="64">
      <img src="@/assets/img_css.png" height="64" width="64">
      <img src="@/assets/img_vue.png" height="64" width="64">
      <img src="@/assets/img_nuxt.png" height="64" width="64">
      <img src="@/assets/img_react.png" height="64" width="64">
      <img src="@/assets/img_ts.png" height="64" width="64">
    </div>
    <p class="has-text-font-muli has-text-orange mt-16">
    </p>
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class SkillSet extends Vue {
    @Prop({ type: String, required: false }) readonly message!: String

    // get fullName (): string {
    //   return `${this.user.firstName} ${this.user.lastName}`
    // }
  }
</script>

<style scoped>
.container-section {
  margin-top: 10rem;
}

.skill-box {
  position: relative;
  margin: 2em 0;
  padding: 1rem 1rem 1rem;
  border: solid 3px white;
  border-radius: 8px;
}

.skill-box .box-title {
  position: absolute;
  display: inline-block;
  top: -0.8rem;
  left: 0.8rem;
  padding: 0 0.7rem;
  line-height: 1;
  background: black;
  color: white;
  font-weight: bold;
}

</style>
