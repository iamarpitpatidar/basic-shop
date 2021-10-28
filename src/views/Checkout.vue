<template>
  <div style="background-color: #2e2e2e">
    <div class="container mx-auto p-6 grid grid-cols-1 row-gap-12 lg:grid-cols-10 lg:gap-10 lg:pt-12">
      <Payment @handle-order="handleOrder"/>
      <Summary />
    </div>
    <modal />
  </div>
</template>

<script lang="ts">
import webhook from 'webhook-discord'
import Payment from '@/components/shop/Payment.vue'
import Summary from '@/components/shop/Summary.vue'
import modal from '../components/modal.vue'

const Hook = new webhook.Webhook('https://discord.com/api/webhooks/893005790854676571/KGSHlEK_FsdAPpDeWK-8AFQsQWeF-eL0hJSl2HWYUwsYUAH4BeAVv-hVZUGwGJq0YguM')

export default {
  components: {
    Payment,
    Summary,
    modal
  },
  methods: {
    handleOrder(data:object) {
      if (!data.username || !data.email || !data.method) {
        alert('please fill the complete form')
      } else {
        Hook.success("Shop",`username: ${data.username}, email: ${data.email}, method: ${data.method}`)
        this.$store.state.isModalOpen = true
      }
    }
  }
}
</script>
