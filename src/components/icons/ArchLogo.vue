<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>

<template>
  <router-link to="/">
      <Icon 
    icon="streamline-logos:arch-linux-logo-solid" 
    class="text-5xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shadow-white" 
  />
  
  <h1 class="text-2xl font-light tracking-widest text-white uppercase flex gap-[15px]">
    <p class="text-white">Arch</p> <span class="font-bold text-blue-400">Analytic</span>
  </h1>
  </router-link>
</template>