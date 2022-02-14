<template>
	<main class="bg-primary fixed bottom-0 left-0 right-0 py-2">
		<section class="w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 px-5 flex justify-between">
			<div class="w-10/12 text-gray-100 bg-secondary px-3 py-1 flex items-center rounded-xl">
				<i class="active:scale-90 duration-300 fa fa-link mr-3 text-sm"></i>
				<input @keyup.enter="newChat" v-model="textField" type="text" placeholder="Your message" class="bg-secondary w-full px-2 py-1 rounded-xl" />
			</div>
			<span>
			<i class="active:scale-90 duration-300 fa fa-microphone text-indigo-600 text-3xl"></i>
			</span>
		</section>>
	</main>
</template>

<script setup>

	import { useChats } from '@/stores/chats'
	import { useContacts } from '@/stores/contacts'
	import { useRoute } from 'vue-router'
	import { ref, computed } from 'vue'

	const emits = defineEmits(['newChat'])
	const chats = useChats()
	const contacts = useContacts()
	const route = useRoute()
	const textField = ref('')

	const paramsId = computed(() => route.params.id)
	
	const newChat = () => {

		if (textField.value.split('').length > 0) {
			chats.addingNewChat({
				text: textField.value,
				left: Boolean(Math.floor(Math.random() * 2)),
				id: paramsId.value
			})

			contacts.setLastMessage(textField.value, paramsId.value)
			emits('newChat')
		}

		textField.value = ''
	} 

</script>
