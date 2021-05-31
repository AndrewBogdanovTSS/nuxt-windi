<template>
  <div class="container mx-auto pl-4">
    <div>
      <Logo />
      <h1 class="">nuxt-windi</h1>
      <div class="after:(content bg-red w-10 h-10)">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  @layer base {
    body {
      @apply bg-green-100;
    }
  }
</style>
