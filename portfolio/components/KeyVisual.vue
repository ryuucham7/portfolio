<template>
  <div class="trim">
    <img class="image-top" src="@/assets/img_key_visual.jpg">
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  interface User {
    firstName: string
    lastName: number
  }

  @Component
  export default class KayVisual extends Vue {
    @Prop({ type: String, required: false }) readonly message!: String

    // get fullName (): string {
    //   return `${this.user.firstName} ${this.user.lastName}`
    // }
  }
</script>

<style scoped>
.trim{
  position: relative;
}
.trim:after{
  position: absolute;
  content:"";
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  /* 塗りつぶす */
  background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 30%, grey 100%);
}
.image-top{
  height: 560px;
  width: 100%;
  object-fit: cover;
}
</style>
