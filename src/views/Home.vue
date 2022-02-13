<template>
	<main>
		<Header>
			<template v-slot:start>
				<span>
					<i class="fa fa-chevron-left text-xl"></i>
				</span>
			</template>
			<template v-slot:center>
				<span class="font-medium text-2xl">Chats</span>
			</template>
			<template v-slot:end>
				<span>
					<i class="fa fa-edit text-xl"></i>
				</span>
			</template>
		</Header>
	</main>
</template>

<script setup>
	import Header from '@/components/Header.vue'
</script>
