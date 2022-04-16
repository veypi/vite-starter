<style>
#app {
  @apply h-full w-full flex justify-center items-center;
}
</style>

<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" enter-active-class="animate__fadeIn"
                leave-active-class="animate__fadeOut">
      <component class="animate__animated animate__faster" :is="Component"
      ></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import {useUserStore} from '@/store/user'

let user = useUserStore()
user.setUser()
</script>

