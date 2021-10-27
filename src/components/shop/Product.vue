<template>
  <div class="product relative rounded-lg">
    <div class="image">
      <span class="tag sale" v-if="onSale">SALE</span>
      <span class="tag sold" v-else-if="soldOut">SALE</span>
      <img :src="item.image" alt="image">
      <div class="absolute w-full h-full top-0 left-0 p-3 btn-wrapper">
        <div class="text-center table relative align-middle h-full mx-auto">
          <div class="relative table-cell align-middle">
            <button class="product-btn my-2" @click="viewDetails">Quick View</button>
            <button class="product-btn my-2" @click="addProduct" v-if="!cart[item.id]">Add to Cart</button>
            <div v-else>
              <button class="product-btn small my-2">-</button>
              <span class="p-2 font-rajdhani font-bold text-white" style="font-size: 20px">{{ cart[item.id] }}</span>
              <button class="product-btn small my-2">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="font-bold uppercase text-white text-xl flex justify-between mt-3">
      <h4><span>{{ item.name }}</span></h4>
      <span class="price flex">
        <del class="mx-1" v-if="onSale">
          <span>${{ item.price }}</span>
        </del>
        <ins class="no-underline mx-1">
          <span v-if="onSale">${{ item.salePrice }}</span>
          <span v-else>${{ item.price }}</span>
        </ins>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapMutations, mapState } from "vuex";
import { Product } from "@/types/product";

export default defineComponent({
  props: {
    item: Object as PropType<Product>
  },
  computed: {
    ...mapState(['cart']),
    onSale: function () {
      return this.item.tags.length && this.item.tags.includes('sale')
    },
    soldOut: function () {
      return this.item.tags.length && this.item.tags.includes('soldOut')
    }
  },
  methods: {
    ...mapMutations(['openModal', 'addToCart']),
    viewDetails() {
      this.openModal(this.item)
    },
    addProduct() {
      this.addToCart(this.item)
    }
  }
})
</script>
