<template>
  <div class="relative p-0 w-full">
    <Hero />
    <div class="px-4 relative" style="background-color: #3d3d3d">
      <div class="grid products pt-12 pb-20 font-rajdhani">
        <Product v-for="each in products" :item="each"/>
        <ProductModal />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from '@/components/Hero.vue'
import Product from '@/components/shop/Product.vue'
import ProductModal from "@/components/shop/ProductModal.vue";
import { mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState(['products'])
  },
  components: {
    Hero,
    Product,
    ProductModal
  }
})
</script>
