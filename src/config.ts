'use strict'
import { discord, facebookURL, products, paymentMethods } from './data.json'

export default {
    facebookInvite: facebookURL,
    shop: {
        name: "Riot",
        products: products
    },
    payment: {
        methods: paymentMethods
    },
    hosts: [
        'localhost:3000'
    ],
    discord: {
        invite: discord.invite,
        webhook: {
            name: "shop",
            url: discord.webhook
        }
    },
    message: {
        emptyCart: 'Your cart is empty',
        invalidUsername: 'Please enter a valid username',
        invalidEmail: 'Please enter a valid Email',
        invalidMethod: 'Please select a payment method'
    }
}
