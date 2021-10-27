<template>
  <div class="col-span-1 lg:col-span-4 my-5 text-gray-300 order-first lg:order-last">
    <h4 class="text-3xl text-gray-200 mb-3">Order Summary</h4>
    <div class="rounded-md shadow-md" style="background-color: #3d3d3d" v-if="Object.keys(this.cart).length">
      <div class="p-4 border-b-2 border-gray-500">
        <item v-for="item in products" :item="item"  />
      </div>
      <div class="px-8 py-4 text-right">
        <div class="font-rajdhani font-bold text-lg">
          <span>Total - $ </span>
          <span>{{ cartTotal }}</span>
        </div>
      </div>
    </div>
    <div class="p-8 rounded-md" style="background-color: #3d3d3d" v-else>
      <span class="text-lg text-gray-300">Your Cart is Empty</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Item from '@/components/shop/Item.vue'
import { mapState, mapGetters } from 'vuex'

export default defineComponent({
  name: "Summary",
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['products']),
    cartTotal() {
      let total = 0
      this.products.forEach(each => {
        const price = each.tags.includes('sale') ? each.salePrice : each.price
        total += price * this.cart[each.id]
      })
      return total
    }
  },
  components: {
    Item
  },
})
</script>
