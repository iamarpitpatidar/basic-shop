'use strict'
import { discordURL, facebookURL, products, paymentMethods } from './data.json'

export default {
    discordInvite: discordURL,
    facebookInvite: facebookURL,
    shop: {
        name: "Riot",
        products: products
    },
    payment: {
        methods: paymentMethods
    },
    host: [
        'r'+'u'+'ne'+'bank'+'s.fun',
        'l'+'ocal'+'ho'+'st',
        'lo'+'ca'+'lho'+'st:30'+'00'
    ]
}
