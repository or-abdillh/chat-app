<template>
	<nav>
		<section class="fixed bottom-0 left-0 right-0">
			<section class="w-full md:px-28 lg:w-4/12 md:mx-auto xl:w-3/12 flex justify-between items-center px-6 py-5 text-gray-100 bg-primary lg:p-5">
				<template v-for="(item, x) in menu" :key="x">
					<div @click="active = item.name" class="text-gray-100">
						<span v-if="active === item.name" class="text-lg font-medium flex flex-col gap-2 items-center">
							{{ item.name }}
							<i class="fa fa-circle text-xxs"></i>
						</span>
						<i v-else class="text-2xl" :class="item.icon"></i>
					</div>
				</template>
			</section>
		</section>
	</nav>
</template>

<script setup>

	import { ref } from 'vue'
	import menu from '@/menu.js'

	const active = ref('Chats')

</script>
