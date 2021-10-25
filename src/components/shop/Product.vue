<template>
  <div class="product relative rounded-lg">
    <div class="image">
      <span class="tag sale" v-if="onSale">SALE</span>
      <span class="tag sold" v-else-if="soldOut">SALE</span>
      <img :src="item.image" alt="image">
      <div class="absolute w-full h-full top-0 left-0 p-3 btn-wrapper">
        <div class="text-center table relative align-middle h-full">
          <div class="relative table-cell align-middle">
            <button class="product-btn my-2" @click="openModal">Quick View</button>
            <button class="product-btn my-2">Add to Cart</button>
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
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  props: {
    item: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: String,
      price: {
        type: Number,
        required: true
      },
      currency: {
        type: String,
        required: true
      },
      image: String,
      quantity: Object,
      tags: [String],
      salePrice: {
        type: Number,
        required: true
      }
    }
  },
  computed: {
    onSale: function () {
      return this.item.tags.length && this.item.tags.includes('sale')
    },
    soldOut: function () {
      return this.item.tags.length && this.item.tags.includes('soldOut')
    }
  },
  methods: {
    ...mapMutations(['openModal'])
  }
})
</script>
