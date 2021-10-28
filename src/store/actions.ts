import { ActionContext } from "vuex";
import { RootState } from "@/store/interface";
import config from '@/config'

const actions = {
    finishCheckout({ state }:ActionContext<RootState, RootState>) {
        state.isLoading = true
        const options = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: config.discord.webhook.name,
                embeds: [
                    {
                        color: 2067276,
                        fields: [
                            {
                                name: 'Success',
                                value: `username: ${state.checkoutForm.username}
                                email: ${state.checkoutForm.email}
                                method: ${state.checkoutForm.method}`
                            }
                        ],
                        footer: {text: 'Made by arpit#8586'}
                    }
                ]
            })
        }


        // discord Webhook
        fetch(config.discord.webhook.url, options)
            .then(() => state.isModalOpen = true)
            .catch(() => alert(config.message.webhookError))
            .finally(() => {
                state.isLoading = false
            })
    }
}

export default actions
