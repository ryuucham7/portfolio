<template>
  <div class="container-base contents mt-64 mb-64 pl-16 pr-16">
    <h1 class="title is-3">
      {{ $t('privacy_title') }}
    </h1>
    <p class="mt-16">
      {{ $t('privacy_desc') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_1_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_1_desc_1') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_1_desc_2') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_1_desc_3') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_1_desc_4') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_1_desc_5') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_1_desc_6') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_1_desc_6_1') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_1_desc_7') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_1_desc_7_1') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_2_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_2_desc_1') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_2_desc_1_1') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_2_desc_1_2') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_3_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_3_desc_1') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_3_desc_1_1') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_4_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_4_desc_1') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_4_desc_1_1') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_4_desc_1_2') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_4_desc_1_3') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_4_desc_1_4') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_4_desc_1_5') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_4_desc_1_6') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_4_desc_1_7') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_5_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_5_desc_1') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_5_desc_1_1') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_5_desc_1_2') }}
    </p>
    <p class="mt-8">
      {{ $t('privacy_5_desc_1_3') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_5_desc_2') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_6_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_6_desc_1') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_7_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_7_desc_1') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_7_desc_2') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_8_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_8_desc_1') }}
    </p>

    <h2 class="mt-64 title is-4">
      {{ $t('privacy_9_title') }}
    </h2>
    <p class="mt-16">
      {{ $t('privacy_9_desc_1') }}
    </p>
    <p class="mt-16">
      {{ $t('privacy_9_desc_2') }}
    </p>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component({
  layout: 'napbaby'
})

export default class PrivacyPolicy extends Vue {}
</script>

<style>
html {
  background: white;
}
</style>
