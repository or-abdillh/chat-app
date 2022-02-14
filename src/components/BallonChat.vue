<template>
	<main class="w-full mb-5 flex" :class="left ? '' : 'flex-row-reverse'">
		<div :class="left ? 'rounded-bl-none bg-secondary' : 'rounded-br-none bg-blue-800'" class="break-words text-gray-100 px-3 py-5 w-8/12 rounded-3xl text-sm">
			{{ text }}
		</div>
	</main>
</template>

<script setup>

	const props = defineProps({
		text: {
			type: String,
			default: 'Lorem ipsum dolor'
		},
		left: {
			type: Boolean,
			default: true
		}
	})

	const emits = defineEmits(["newChat"])

</script>
