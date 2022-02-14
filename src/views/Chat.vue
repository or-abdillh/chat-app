<template>
	<main>
		<Header>
			<template v-slot:start>
				<div class="flex gap-3 items-center">
					<i @click="back" class="fa fa-chevron-left mr-5 text-xl active:scale-90 duration-300"></i>
					<img class="rounded-lg" v-if="profile[0].avatar !== null" :src="profile[0].avatar" width="40" />
					<span v-else class="grid place-items-center bg-blue-800 py-2 px-3 font-medium rounded-lg">
						{{ profile[0].initial }}
					</span>
					<div>
						<h1 class="text-xl font-medium">{{ profile[0].name }}</h1>
						<small class="text-green-500">{{ profile[0].status }}</small>
					</div>
				</div>
			</template>

			<template v-slot:end>
				<div class="text-xl">
					<i class="fa fa-phone mr-5"></i>
					<i class="fa fa-video"></i>
				</div>
			</template>
		</Header>

		<ChatAction />
	</main>
</template>

<script setup>

	import { useRoute, useRouter } from 'vue-router'
	import { computed } from 'vue'
	import chats from '@/chats.js'
	import Header from '@/components/Header.vue'
	import ChatAction from '@/components/ChatAction.vue'

	const router = useRouter()
	const route = useRoute()

	const paramsId = computed(() => route.params.id)
	const profile = chats.filter( e => e.id == paramsId.value )

	const back = () => {
		setTimeout(() => {
			router.go(-1)
		}, 500)
	}
	
</script>
