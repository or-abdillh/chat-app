<template>
	<main class="w-full px-2 rounded-xl overflow-hidden text-gray-100 flex mt-8 bg-secondary">
		<span class="p-3 w-1/12"><i class="fa fa-search"></i></span>
		<input @input="setKeyword" v-model="keyword" type="search" placeholder="search" class="w-11/12 px-2 bg-secondary rounded-xl ring-secondary" />
	</main>
</template>

<script setup>

	import { useContacts } from '@/stores/contacts'
	import { ref } from 'vue'

	const state = useContacts()
	const emits = defineEmits(['search'])
	const keyword = ref('')
	const setKeyword = () => {
	  state.setCurrentKeyword(keyword.value)
	  emits('search')
	}

</script>
