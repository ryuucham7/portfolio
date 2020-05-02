<template>
  <div class="container-section fadein pl-16 pr-16">
    <div class="contents has-text-centered">
      <h2 class="subtitle has-font-noto-serif has-text-orange">
        Works
      </h2>
      <div class="columns">
        <div class="column is-half has-text-left mt-64">
          <img class="mr-16" src="@/assets/img_airtripp.png" height="64" width="200">
          <p class="has-text-white mt-40 is-size-5">
            The app provides a gifting function where, by collecting in-app Gifts from friends, it will be possible for you to visit the country of your dreams
Collect gifts from all over the world through your posts
Exchange the gifts collected to get a flight ticket to the country of your dreams
          </p>
        </div>
        <div class="column is-half mt-64">
          <iframe class="movie-airtripp" width="525" height="332"
            src="https://www.youtube.com/embed/5u1QmxsHYFs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen/>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half has-text-left mt-64">
          <img class="mr-16" src="@/assets/img_airfunding.png" height="64" width="232">
          <p class="has-text-white mt-40 is-size-5">
            This is a small-scale crowdfunding platform, which is free to use for everyone
We believe that everyone regardless of country and social class can gather funds to achieve dreams or help people in need
Create a project to collect funds to achieve dreams or help others, or look for projects for you to support
          </p>
        </div>
        <div class="column is-half mt-64">
          <a href="https://www.airfunding.net/">
            <img class="mr-16" src="@/assets/img_airfunding_top.png" width="525" height="332">
          </a>
        </div>
      </div>

      <div class="has-text-left mt-128">
        <p class="is-size-3 has-font-noto-serif has-text-centered has-text-white">Sub works</p>
        <p class="has-text-white mt-40 is-size-4">
          某大手通信会社の配車系Webアプリ開発
        </p>
        <p class="mt-40 has-text-white is-size-5">
          Android、iOS、Webアプリ開発
          <br>期間:
          約半年
          <br>利用技術:
          vue.js(quasar framework), Androd java, swift, google cloud functions, go, firebase
        </p>
        <p class="has-text-white mt-128 is-size-4">
          某大手銀行の人事教育系アプリ＆ポイントシステムアプリ開発
        </p>
        <p class="has-text-white mt-40 is-size-5">
          Android, iOSアプリ開発
          <br>期間:
          約9ヶ月
          <br>利用技術:
          kotlin, swift, firebase
        </p>
      </div>

      <div class="has-text-white mt-128">
        <p class="is-size-3 has-font-noto-serif mb-64-pc">Others</p>
        <div class="columns">
          <div class="column is-half has-text-left mt-16">
            <p class="has-text-white mt-40 is-size-5">
              <a class="has-text-white has-text-weight-bold is-size-4" href="https://menta.work/plan/982" target="_brank">MENTA</a>というプログラミング学習支援サービスでメンターもやっています。
              <br>
              複数プラン用意していますので、もし気になったら一度メッセージしてください。
              SNSからの連絡でも問題ありません！
            </p>
          </div>
          <div class="column is-half mt-8">
            <a href="https://menta.work/plan/982">
              <img class="mr-16" src="@/assets/img_sample_menta.png" width="525" height="332">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component
  export default class Works extends Vue {
  }
</script>

<style lang="scss" scoped>
.container-section {
  background: black;
  animation-duration: 4s;
  animation-name: Effect;

  .contents {
    margin: auto;
    max-width: 1080px;
  }
}

.movie-airtripp {
  width: 350px;
  height: 224px;
}
@media (min-width: 768px){
  .movie-airtripp {
    width: 525px;
    height: 332px;
  }
}


</style>
