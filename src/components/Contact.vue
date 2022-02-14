<template>
	<main @click="openChat" class="w-full active:scale-90 duration-300 mb-3 flex justify-between items-center border-2 rounded-xl border-secondary py-2 px-3">
		<div class="text-gray-50 flex justify-between items-start gap-5">
			<div v-if="contact.avatar !== null">
				<img width="60" class="rounded-lg" :src="contact.avatar" />
			</div>
			
			<div class="text-gray-50 p-5 rounded-lg bg-blue-600" v-else-if="contact.avatar === null">
				{{ contact.initial }}
			</div>

			<div class="text-gray-100">
				<h1 class="text-xl font-medium mb-2">{{ contact.name }}</h1>
				<p class="text-xs">{{ generatePreviewText(contact.lastMessage) }}</p>
			</div>
		</div>

		<div class="text-gray-400 flex flex-col items-center gap-2">
			<p class="text-xs">{{ contact.timestamp }}</p>
			<i v-if="contact.unReadMessage > 0" class="fa fa-circle text-xs text-blue-600"></i>
		</div>
	</main>
</template>

<script setup>

	import { useRouter } from 'vue-router'
	import { useContacts } from '@/stores/contacts'
	import { computed } from 'vue'
  
  const router = useRouter()
	const openChat = () => {
		setTimeout(() => {
			router.push({ name: 'Chat', params: { id: props.contact.id } })
		}, 500)
	}
	
	const props = defineProps({
		contact: {
			type: Object
		}
	})

	const generatePreviewText = text => {
		const textArr = text.split('')
		if (textArr.length < 25) return textArr.join('')
		else return textArr.slice(0, 25).join('') + '...'
	}

</script>
