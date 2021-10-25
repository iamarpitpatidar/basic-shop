<template>
  <header class="navbar shadow" v-if="$route.meta.title">
    <div class="w-full text-center my-0 mx-auto py-0 px-10">
      <div class="grid" style="grid-template-columns: 2fr 1fr">
        <div class="w-32">
          <a href="/" class="w-32">
            <img class="w-full h-full" src="/logo.png" alt="logo">
          </a>
        </div>
        <div class="flex cart justify-end items-center">
          <div class="m-1">
            <Cart/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cart from '@/components/Cart.vue'

export default {
  components: {
    Cart
  }
}
</script>
