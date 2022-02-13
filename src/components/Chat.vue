<template>
	<main class="w-full mb-3 flex justify-between items-center border-2 rounded-xl border-secondary py-2 px-3">

		<div class="text-gray-50 flex justify-between items-start gap-5">
			<div v-if="chat.avatar !== null">
				<img width="60" class="rounded-lg" :src="chat.avatar" />
			</div>
			
			<div class="text-gray-50 p-5 rounded-lg bg-blue-600" v-else-if="chat.avatar === null">
				{{ chat.initial }}
			</div>

			<div>
				<h1>{{ chat.name }}</h1>
				<p class="text-xs">{{ chat.lastMessage.split('').slice(0, 25).join('') }}</p>
			</div>
		</div>

		<div class="text-gray-400 flex flex-col items-center gap-2">
			<p class="text-xs">{{ chat.timestamp }}</p>
			<i v-if="chat.unReadMessage > 0" class="fa fa-circle text-xs text-blue-600"></i>
		</div>
	</main>
</template>

<script setup>

	import Chat from '@/components/Chat.vue'
	const props = defineProps({
		chat: {
			type: Object
		}
	})

</script>
