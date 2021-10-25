'use strict'

import path from 'path'

export default {
    discordInvite: 'https://discord.com/channels/@me',
    facebookInvite: 'https://facebook.com/',
    shop: {
        name: "Riot",
        products: [
            {
                id: 1,
                name: "Magic Potion",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 10,
                currency: "USD",
                image: "/images/1.png",
                quantity: {
                    min: 1,
                    max: 100
                },
                tags: ['soldOut', 'sale'],
                salePrice: 2
            },
            {
                id: 2,
                name: "Magic Ring",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 14,
                currency: "USD",
                image: "/images/2.jpg",
                quantity: {
                    min: 5,
                    max: 100
                },
                tags: [],
                salePrice: null
            },
            {
                id: 3,
                name: "Grey Spider",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 14,
                currency: "USD",
                image: "/images/3.jpg",
                quantity: {
                    min: 5,
                    max: 100
                },
                tags: ['sale'],
                salePrice: 10
            },
            {
                id: 4,
                name: "Bamboo Fang",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 14,
                currency: "USD",
                image: "/images/1.png",
                quantity: {
                    min: 5,
                    max: 100
                },
                tags: ['soldOut'],
                salePrice: 7
            },
            {
                id: 5,
                name: "Green Lantern",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 14,
                currency: "USD",
                image: "/images/2.jpg",
                quantity: {
                    min: 5,
                    max: 100
                },
                tags: []
            },
            {
                id: 6,
                name: "Red Brawler",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 68,
                currency: "USD",
                image: "/images/1.png",
                quantity: {
                    min: 5,
                    max: 100
                },
                tags: ['sale'],
                salePrice: 20
            },
            {
                id: 7,
                name: "Red Brawler",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                price: 97,
                currency: "USD",
                image: "/images/1.png",
                quantity: {
                    min: 5,
                    max: 100
                },
                tags: ['soldOut']
            }
        ]
    }
}
