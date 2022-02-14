import { defineStore } from 'pinia'

export const useChats = defineStore('chats', {
	state: () => {
		return {
			chats: [
				{
					text: 'This is example response',
					left: false
				},
				{
					text: 'The position of your chat will be randomized so that it allows you to create a chat from different sides 😀',
					left: true
				}
			]
		}
	},
	actions: {
		addingNewChat (payload) {
			this.chats.push(payload)
		}
	}
})
