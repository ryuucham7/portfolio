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
        <div class="column is-half has-font-muli has-text-white history">
          <p class="mt-16 is-size-5">
            大学卒業後、約4年半BtoBの就業管理システム開発経験を経て2015年10月より株式会社奇兵隊に参画。
            <br>
            主にAndroid、Railsエンジニアとして<a class="has-text-orange has-text-weight-bold" href="https://airtripp.page.link/home" target="_blank">Airtripp</a>アプリの開発を担当した後、
            2017年より取締役CTOに就任。
            <br><br>
            現在は世界中のユーザー利用するラウドファンディングサービス <a class="has-text-green has-text-weight-bold" :href="'https://www.airfunding.net?' + trackingParams('ryuucham', 'referral', 'portfolio')" target="_blank">Airfunding</a>のグロースをメインで担当しつつ、エンジニアチームビルディングに勤しむ。
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

    trackingParams(utmSource: string, utmMedium: string, utmCampaign: string, utmContent: string) {
      var params
      params = 'utm_source=' + encodeURIComponent(utmSource)
      params += '&utm_medium=' + encodeURIComponent(utmMedium)
      params += '&utm_campaign=' + encodeURIComponent(utmCampaign)
      if (utmContent) {
        params += '&utm_content=' + encodeURIComponent(utmContent)
      }
      return params
    }
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
