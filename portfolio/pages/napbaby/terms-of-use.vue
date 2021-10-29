<template>
  <div class="container-base contents mt-64 mb-64 pl-16 pr-16">
    <div id="wrapContents">
      <h1 class="title is-3">{{ $t('terms_title') }}</h1>
      <p>{{ $t('terms_desc') }}</p>

      <h2 class="mt-64 title is-4">{{ $t('terms_1_title') }}</h2>
      <ol class="pl-16">
        <li>{{ $t('terms_1_desc_1_1') }}</li>
        <li>{{ $t('terms_1_desc_1_2') }}</li>
        <li>{{ $t('terms_1_desc_1_3') }}</li>
      </ol>

      <h2 class="mt-64 title is-4">{{ $t('terms_2_title') }}</h2>
      <p>
        {{ $t('terms_2_desc_1') }}
      </p>
      <p>
        {{ $t('terms_2_desc_2') }}
      </p>
      <ol class="pl-16">
      <li>{{ $t('terms_2_desc_2_1') }}</li>
      <li>{{ $t('terms_2_desc_2_2') }}</li>
      <li>{{ $t('terms_2_desc_2_3') }}</li>
      </ol>

      <h2 class="mt-64 title is-4">{{ $t('terms_3_title') }}</h2>
      <ol class="pl-16">
        <li>{{ $t('terms_3_desc_1_1') }}</li>
        <li>{{ $t('terms_3_desc_1_2') }}</li>
        <li>{{ $t('terms_3_desc_1_3') }}</li>
      </ol>

      <h2 class="mt-64 title is-4">{{ $t('terms_4_title') }}</h2>
      <ol class="pl-16">
        <li>{{ $t('terms_4_desc_1_1') }}</li>
        <li>{{ $t('terms_4_desc_1_2') }}</li>
      </ol>

      <h2 class="mt-64 title is-4">{{ $t('terms_5_title') }}</h2>
      <p>{{ $t('terms_5_desc_1') }}</p>

      <ol class="pl-16">
        <li>{{ $t('terms_5_desc_1_1') }}</li>
        <li>{{ $t('terms_5_desc_1_2') }}</li>
        <li>{{ $t('terms_5_desc_1_3') }}</li>
        <li>{{ $t('terms_5_desc_1_4') }}</li>
        <li>{{ $t('terms_5_desc_1_5') }}</li>
        <li>{{ $t('terms_5_desc_1_6') }}</li>
        <li>{{ $t('terms_5_desc_1_7') }}</li>
        <li>{{ $t('terms_5_desc_1_8') }}</li>
        <li>{{ $t('terms_5_desc_1_9') }}</li>
        <li>{{ $t('terms_5_desc_1_10') }}</li>
        <li>{{ $t('terms_5_desc_1_11') }}</li>
        <li>{{ $t('terms_5_desc_1_12') }}</li>
        <li>{{ $t('terms_5_desc_1_13') }}</li>
        <li>{{ $t('terms_5_desc_1_14') }}</li>
      </ol>

      <h2 class="mt-64 title is-4">{{ $t('terms_6_title') }}</h2>
      <p>
        {{ $t('terms_6_desc_1') }}
      </p>
      <p>
        {{ $t('terms_6_desc_3') }}
      </p>
      <div>
         {{ $t('terms_6_desc_3') }}
        <ol class="pl-16">
          <li>{{ $t('terms_6_desc_3_1') }}</li>
          <li>{{ $t('terms_6_desc_3_2') }}</li>
          <li>{{ $t('terms_6_desc_3_3') }}</li>
          <li>{{ $t('terms_6_desc_3_4') }}</li>
        </ol>
      </div>

      <h2 class="mt-64 title is-4">{{ $t('terms_7_title') }}</h2>
      <div> {{ $t('terms_7_desc_1') }}
        <ol class="pl-16">
          <li>{{ $t('terms_7_desc_1_1') }}</li>
          <li>{{ $t('terms_7_desc_1_2') }}</li>
          <li>{{ $t('terms_7_desc_1_3') }}</li>
          <li>{{ $t('terms_7_desc_1_4') }}</li>
          <li>{{ $t('terms_7_desc_1_5') }}</li>
          <li>{{ $t('terms_7_desc_1_6') }}</li>
        </ol>
      </div>
      <p>{{ $t('terms_7_desc_2') }}</p>

      <h2 class="mt-64 title is-4">{{ $t('terms_8_title') }}</h2>
      <p> {{ $t('terms_8_desc_1') }}</p>

      <h2>{{ $t('terms_9_title') }}</h2>
      <ol class="pl-16">
        <li>{{ $t('terms_9_desc_1_1') }}</li>
        <li>{{ $t('terms_9_desc_1_2') }}</li>
        <li>{{ $t('terms_9_desc_1_3') }}</li>
        <li>{{ $t('terms_9_desc_1_4') }}</li>
      </ol>

      <h2 class="mt-64 title is-4">{{ $t('terms_10_title') }}</h2>
      <p>{{ $t('terms_10_desc_1') }}</p>

      <h2 class="mt-64 title is-4">{{ $t('terms_11_title') }}</h2>
      <p>{{ $t('terms_11_desc_1') }}</p>

      <h2 class="mt-64 title is-4">{{ $t('terms_12_title') }}</h2>
      <p>{{ $t('terms_12_desc_1') }}</p>

      <h2 class="mt-64 title is-4">{{ $t('terms_13_title') }}</h2>
      <p>{{ $t('terms_13_desc_1') }}</p>

      <h2 class="mt-64 title is-4">{{ $t('terms_14_title') }}</h2>
      <p>{{ $t('terms_14_desc_1') }}</p>

      <h2 class="mt-64 title is-4">{{ $t('terms_15_title') }}</h2>
      <ol class="pl-16">
       <li>{{ $t('terms_15_desc_1_1') }}</li>
        <li>{{ $t('terms_15_desc_1_2') }}</li>
        <li>{{ $t('terms_15_desc_1_3') }}</li>
      </ol>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  layout: 'napbaby'
})

export default class TermsOfUse extends Vue {}
</script>

<style lang="scss" scoped>
</style>
