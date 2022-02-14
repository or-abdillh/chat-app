<template>
	<main class="w-full py-5 pb-20">
		<BallonChat text="The position of your chat will be randomized so that it allows you to create a chat from different sides 😀" :left="false" />
		<template v-for="(chat, x) in chats" :key="x">
			<BallonChat :text="chat.text" :left="chat.left" />
		</template>
	</main>
</template>

<script setup>
	import { useRoute } from 'vue-router'
	import { computed } from 'vue'
	import { useChats } from '@/stores/chats'
	import BallonChat from '@/components/BallonChat.vue'

	const state = useChats()
	const route = useRoute()

	const paramsId = computed(() => route.params.id)
	const chats = computed(() => state.chats.filter(chat => chat.id == paramsId.value))
	
</script>
