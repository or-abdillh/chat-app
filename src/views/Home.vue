<template>
	<main class="pb-24 pt-8">
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

		<Searchbar />

		<section>
			<Chats :chats="chats" />
		</section>

		<Navbar />
	</main>
</template>

<script setup>
	import Header from '@/components/Header.vue'
	import Navbar from '@/components/Navbar.vue'
	import Searchbar from '@/components/Searchbar.vue'
	import Chats from '@/components/Chats.vue'
	import chats from '@/chats.js'
</script>
