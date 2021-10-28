<template>
  <div class="col-span-1 lg:col-span-6 my-5 text-gray-300">
    <h4 class="text-3xl mb-3">Payment information</h4>
    <div class="p-8 rounded-md shadow-md" style="background-color: #3d3d3d">
      <div class="mt-10 sm:mt-0">
        <form action="#" method="POST" class="form-control">
          <div class="overflow-hidden sm:rounded-md">
            <div class="grid grid-cols-2 gap-6 px-2">
              <div class="col-span-2 sm:col-span-1">
                <label
                    for="username"
                    class="block text-sm font-medium"
                >Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="off"
                    v-model="username"
                    class="input mt-1 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 block w-full shadow-sm sm:text-sm rounded-md" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                    for="email"
                    class="block text-sm font-medium"
                >Email address</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="off"
                    v-model="email"
                    class="input mt-1 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 block w-full shadow-sm sm:text-sm rounded-md" />
              </div>
              <div class="col-span-2 mb-4">
                <span class="block text-sm font-medium my-3">Payment Method</span>
                <div class="grid sm:grid-cols-2 gap-6">
                  <label
                      :for="coin.name"
                      v-for="coin in paymentMethods"
                      class="payment relative p-5 rounded-lg shadow-md cursor-pointer"
                  >
                    <span class="font-semibold text-gray-300 uppercase mb-3">{{ coin.name }}</span>
                    <input type="radio" name="plan" :id="coin.name" v-model="method" :value="coin.name" class="absolute h-0 w-0 hidden">
                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-gray-300 bg-green-100 bg-opacity-10 rounded-lg">
                      <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="mt-4">
        <button @click="finishPayment"
                class="w-full text-center px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold"
                :class="[isCartEmpty ? 'cursor-not-allowed disabled:opacity-50' : '']"
                :disabled="isCartEmpty"
        >
          Confirm payment
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapMutations } from 'vuex'
import config from '@/config'

export default defineComponent({
  name: "Payment",
  data() {
    return {
      paymentMethods: config.payment.methods
    }
  },
  computed: {
    ...mapState(['cart', 'checkoutForm']),
    username: {
      get() {
        return this.$store.state.checkoutForm.username
      },
      set(value) {
        this.updateCheckoutForm({field: 'username', value: value})
      }
    },
    email: {
      get() {
        return this.$store.state.checkoutForm.email
      },
      set(value) {
        this.updateCheckoutForm({field: 'email', value: value})
      }
    },
    method: {
      get() {
        return this.$store.state.checkoutForm.method
      },
      set(value) {
        this.updateCheckoutForm({field: 'method', value: value})
      }
    },
    isCartEmpty() {
      return !Object.keys(this.cart).length
    }
  },
  methods: {
    ...mapMutations(['updateCheckoutForm']),
    ...mapActions(['finishCheckout']),
    finishPayment() {
      if (this.validateForm()) {
        this.finishCheckout()
      }
    },
    validateForm() {
      let isValid = false
      if (this.isCartEmpty) alert(config.message.emptyCart)
      else if (!this.username) alert(config.message.invalidUsername)
      else if (!this.email || !this.validateEmail(this.email)) alert(config.message.invalidEmail)
      else if (!this.method) alert(config.message.invalidMethod)
      else isValid = true

      return isValid
    },
    validateEmail(email:string) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
})
</script>
