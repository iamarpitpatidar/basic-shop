<template>
  <Popover class="relative">
    <PopoverButton class="text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="item-count" v-if="isCartValid">{{ Object.keys(this.cart).length }}</span>
    </PopoverButton>
    <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute z-10 right-0 w-screen max-w-sm mt-3 origin-top-right shadow-lg focus:outline-none font-rajdhani">
        <div class="h-full w-full flex flex-col rounded" style="background-color: #2e2e2e">
          <div class="py-2 px-4 h-10 text-left border-b border-gray-600">
            <h2 class="text-gray-100 text-lg font-bold">CART</h2>
          </div>
          <div class="text-gray-300 px-3 py-4 max-h-52 overflow-auto scrollbar">
            <div class="grid gap-3" v-if="isCartValid">
              <div class="flex relative" v-for="product in products">
                <div class="inline-block flex-shrink-0 w-12">
                  <img :src="product.image" alt="product">
                </div>
                <div class="relative flex flex-start flex-wrap flex-grow px-2">
                  <h3 class="truncate text-left font-bold w-3/4">{{ product.name }}</h3>
                  <span class="text-right font-bold w-1/4">$ {{ product.tags.includes('sale') ? product.salePrice : product.price }}</span>
                  <div class="flex">
                    <button class="mr-4" :data-productId="product.id" @click="removeProduct(product.id)">Delete</button>
                    <span>Qty {{ cart[product.id] }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4" v-else>
              <span class="text-lg">Your Cart is Empty</span>
            </div>
          </div>
          <div class="text-gray-200 checkout" v-if="isCartValid">
            <router-link to="/checkout" class="block h-12">
              <span class="price">
                <span>Checkout - $</span>
                <span>{{ cartTotal }}</span>
                <svg class="icon" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><line stroke-width="2" stroke-linecap="round" stroke-linejoin="round" x1="3" y1="12" x2="21" y2="12"></line><polyline stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="15,6 21,12 15,18 "></polyline></g>
                </svg>
              </span>
            </router-link>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {mapState, mapGetters, mapMutations} from 'vuex'

export default defineComponent({
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['products']),
    isCartValid() {
      return !!Object.keys(this.cart).length
    },
    cartTotal() {
      return 0
    }
  },
  components: {Popover, PopoverButton, PopoverPanel},
  methods: {
    ...mapMutations(['deleteFromCart']),
    removeProduct(productId:number) {
      this.deleteFromCart(productId)
    }
  },
})
</script>
