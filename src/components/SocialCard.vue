<template>
  <section class="rounded-[.75rem] bg-dark-grey max-w-[24rem] w-full p-6 md:p-10 flex flex-col items-center gap-6">
    <img class="w-[5.5rem] h-[5.5rem] rounded-full object-cover" src="/profile.avif" alt=""> 
    
    <div class="flex flex-col gap-1 items-center text-center">
      <h2 class="heading text-white font-semibold">Jessica Randall</h2>
      <p class="body font-bold text-neon-green">London, United Kingdom</p>
    </div>

    <p class="text-center body text-white">"Front-end developer and avid reader."</p>

    <div class="w-full flex flex-col gap-4">
      <SocialLink>Github</SocialLink>
      <SocialLink>Frontend Mentor</SocialLink>
      <SocialLink>LinkedIn</SocialLink>
      <SocialLink>Twitter</SocialLink>
      <SocialLink>Instagram</SocialLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import SocialLink from './SocialLink.vue'

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
