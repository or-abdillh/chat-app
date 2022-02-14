<template>
	<main class="fixed top-0 right-0 left-0">
		<section class="bg-primary px-5 py-3 text-gray-100 w-full md:px-28 lg:w-4/12 md:mx-auto xl:w-3/12 flex justify-between items-center lg:p-5">
			<slot name="start"></slot>
			<slot name="center"></slot>
			<slot name="end"></slot>
		</section>
	</main>
</template>
