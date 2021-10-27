<template>
  <header class="navbar shadow sticky top-0 z-50">
    <div class="w-full text-center my-0 mx-auto py-0 px-4 sm:px-8 md:px-10">
      <div class="grid" style="grid-template-columns: 2fr 1fr">
        <div class="w-32">
          <router-link to="/" class="w-32">
            <img class="w-full h-full" src="/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="flex cart justify-end items-center">
          <div class="m-1">
            <Cart v-if="$route.meta.title"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Cart from '@/components/Cart.vue'

export default {
  components: {
    Cart
  }
}
</script>
