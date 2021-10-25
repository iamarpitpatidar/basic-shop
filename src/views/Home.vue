<template>
  <div class="relative p-0 w-full">
    <Hero />
    <div class="px-4 relative" style="background-color: #3d3d3d">
      <div class="grid products pt-12 pb-20 font-rajdhani">
        <Product v-for="each in products" @view-details="modalAction('open', each)" :item="each"/>
        <ProductModal :is-open="modal.isOpen" :item="modal.data" @close="modalAction('close')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import config from '../config'
import Hero from '@/components/Hero.vue'
import Product from '@/components/shop/Product.vue'
import ProductModal from "@/components/shop/ProductModal.vue";

export default {
  data: function (){
    return {
      products: config.shop.products,
      modal: {
        isOpen: false,
        data: {}
      }
    }
  },
  components: {
    Hero,
    Product,
    ProductModal
  },
  methods: {
    modalAction: function (action:String, data = {}) {
      this.modal.isOpen = action === 'open'
      this.modal.data = data
    }
  }
}
</script>
