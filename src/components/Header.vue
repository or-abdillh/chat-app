<template>
	<main class="fixed top-0 right-0 left-0 bg-primary">
		<section class="px-5 py-3 text-gray-100 w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 flex justify-between items-center">
			<slot name="start"></slot>
			<slot name="center"></slot>
			<slot name="end"></slot>
		</section>
	</main>
</template>
