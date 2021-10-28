<template>
  <div style="background-color: #2e2e2e">
    <div class="container mx-auto p-6 grid grid-cols-1 row-gap-12 lg:grid-cols-10 lg:gap-10 lg:pt-12">
      <Payment />
      <Summary />
    </div>
    <modal />
  </div>
</template>

<script lang="ts">
import Payment from '@/components/shop/Payment.vue'
import Summary from '@/components/shop/Summary.vue'
import modal from '@/components/modal.vue'

export default {
  components: {
    Payment,
    Summary,
    modal
  }
}
</script>
