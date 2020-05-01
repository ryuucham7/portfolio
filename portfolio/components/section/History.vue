<template>
  <div class="container-section">
    <div class="contents">
      <h2 class="subtitle has-font-noto-serif has-text-white has-text-centered has-text-orange">
        About Me
      </h2>
      <div class="columns mt-16 is-centered is-vcentered">
        <div class="column is-5 user-icon">
          <figure class="image is-256x256 is-center">
            <img class="is-rounded" src="@/assets/img_profile_temp.jpg">
          </figure>
        </div>
        <div class="column is-half has-text-font-muli has-text-white history">
          <p class="is-size-6-mobile is-size-5">
            大阪府出身、学生時代はプログラミングやITの世界とは無縁でひたすらバスケに熱中。
            立命館大学国際関係学部にて国際経済および金融などを学び、University of British Columbiaへ留学。
            <br>
            <br>
            大学卒業後、4年半BtoBの就業管理システム開発経験を経て2015年10月より株式会社奇兵隊に参画。
            <br>
            主にAndroid、RailsエンジニアとしてAirtrippアプリの開発を担当した後、
            2017年よりCTOとして取締役に就任。
            現在は現場であらゆるコードを書きつつ、エンジニアチームビルディングに勤しむ。
          </p>
        </div>
      </div>
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
  export default class History extends Vue {
    @Prop({ type: String, required: false }) readonly message!: String

    // get fullName (): string {
    //   return `${this.user.firstName} ${this.user.lastName}`
    // }
  }
</script>

<style lang="scss" scoped>
.is-center {
  margin: auto;
}

.container-section {
  .contents {
    margin: auto;
    max-width: 1080px;
  }
  .contact {
    animation-duration: 4s;
    animation-name: Effect;
  }
  .history {
    animation-duration: 3s;
    animation-name: Effect;
  }
}
</style>
