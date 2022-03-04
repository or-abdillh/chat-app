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
			setTimeout(() => {
				chats.addingNewChat({
					text: textField.value,
					left: Boolean(Math.floor(Math.random() * 2)),
					id: paramsId.value
				})
	
				contacts.setLastMessage(textField.value, paramsId.value)
				emits('newChat')
				textField.value = ''
			}, 500)
		}

	} 
</script>

<template>
	<main class="fixed bottom-0 left-0 right-0">
		<section class="bg-primary items-center p-5 w-full md:px-28  lg:p-5 lg:w-4/12 md:mx-auto xl:w-3/12 px-5 flex justify-between">
			<div class="w-10/12 text-gray-100 bg-secondary px-3 py-1 flex items-center rounded-xl">
				<i class="active:scale-90 duration-300 fa fa-link mr-3 text-sm"></i>
				<textarea rows="2" v-model="textField" type="text" placeholder="Your message" class="bg-secondary w-full px-2 py-1 rounded-xl" ></textarea>
			</div>
			<span>
			<i v-if="textField === ''" class="active:scale-90 duration-300 fa fa-microphone text-indigo-600 text-3xl"></i>
			<i v-else @click="newChat" class="active:scale-90 duration-300 fa fa-paper-plane text-indigo-600 text-3xl"></i>
			</span>
		</section>
	</main>
</template>

