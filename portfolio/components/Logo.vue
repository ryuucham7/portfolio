<template>
  <div>
    Name: {{ fullName }}
    Message: {{ message }}
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  interface User {
    firstName: string
    lastName: number
  }

  @Component
  export default class Logo extends Vue {
    @Prop({ type: Object, required: true }) readonly user!: User
    @Prop({ type: String, required: false }) readonly message!: String

    get fullName (): string {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
