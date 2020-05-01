<template>
  <div class="trim">
    <img class="image-top" src="@/assets/img_black_desk.jpg">
    <div class="has-text-white has-font-ozwald container-title mt-16 is-size-4-mobile">
      <h1 class="is-size-4-mobile">RYUTA SATO</h1>
      <p class="is-size-5-mobile is-size-3">
        {{ "Director CTO & Engineer" }}
      </p>
      <br>
    </div>
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  interface User {
    firstName: string
    lastName: number
  }

  @Component
  export default class KeyVisual extends Vue {
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
  /* background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 30%, grey 100%); */
}
.image-top{
  height: 320px;
  width: 100%;
  object-fit: cover;
}

.container-title {
  position: absolute;
  top: 140px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}

.under {
  border: solid 2px #FF7F50;
  width: 64px;
  left: 0;
  right: 0;
  margin: auto;
}

@media (min-width: 768px){
  .image-top {
    height: 540px;
  }

  .container-title {
    top: 240px;
    left: 80px;
    right: 20px;
    font-size: 6rem !important;
    margin: 20px !important;
    text-align: right;
  }
}
</style>
