<template>
	<main class="w-full py-5 pb-20">
		<BallonChat :text="lastMessage" :left="true" />
		<template v-for="(chat, x) in chats" :key="x">
			<BallonChat :text="chat.text" :left="chat.left" />
		</template>
	</main>
</template>

<script setup>
	import { computed } from 'vue'
	import { useChats } from '@/stores/chats'
	import BallonChat from '@/components/BallonChat.vue'

	const state = useChats()

	const chats = computed(() => state.chats)
	
	const props = defineProps({
		lastMessage: {
			type: String,
			default: 'random string'
		}
	})
</script>
