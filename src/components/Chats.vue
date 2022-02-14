<template>
	<main class="mt-10">
		<template v-for="(chat, x) in chats" :key="x">
			<Chat :chat="chat" />
		</template>
	</main>
</template>

<script setup>

	import Chat from '@/components/Chat.vue'
	const props = defineProps({
		chats: {
			type: Array
		}
	})

</script>
