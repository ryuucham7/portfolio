<template>
  <div class="container-section">
    <h2 class="subtitle has-font-noto-serif has-text-white mt-24 is-size-4-mobile">
      Personal History
    </h2>
    <p class="has-text-font-muli has-text-white mt-16">
      大阪府出身、学生時代はプログラミングやITの世界とは無縁でひたすらバスケに勤しむ。
      大学時代は立命館大学国際関係学部にて国際経済および金融などを学び、世界で通用できる人になるためにUniversity of British Columbiaへ留学。
      <br>
      大学卒業後、株式会社ワークスアプリケーションズに入社しエンジニアとして歩み始める。
      就業管理システム開発経験を経て2015年10月より株式会社奇兵隊に参画。
      <br>
      主にAndroid、RailsエンジニアとしてAirtrippアプリ改善を担当した後に2017年よりCTOとして取締役に就任。
      現在は最先端でコードも書きつつ、エンジニアチームビルディングに勤しむ。
    </p>
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

<style scoped>
</style>
