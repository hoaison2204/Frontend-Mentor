<template>
	<div class="app">
		<div class="header container h-100 p-5">
			<h1 class="mb-5">Weather App</h1>
			<div class="d-flex justify-content-center h-100">
				<div class="searchBar w-50 mx-2">
					<input
						type="text"
						class="input form-control"
						placeholder="Enter a city"
						v-model="city"
						name=""
					/>
				</div>
				<button class="btn-search btn btn-primary">
					Search <i class="fas fa-search"></i>
				</button>
			</div>
		</div>
		<br />
		<WeatherApp />
	</div>
</template>

<script>
	import WeatherApp from './components/WeatherApp.vue'
	export default {
		name: 'App',
		components: {
			WeatherApp,
		},
		data() {
			return {
				city: '',
				showWeather: false,
			}
		},
		methods: {
			async searchWeather() {
				this.showWeather = false
				await this.$nextTick()
				this.showWeather = true
			},
		},
	}
</script>

<style>
	body {
		background-color: #121212 !important;
	}
	.header {
		background-color: #212730;
		border-radius: 20px;
		color: #fff;
		text-align: center;
		font-family: 'Franklin', sans-serif;
		margin-top: 5rem;
	}

	.btn-search {
		background-image: linear-gradient(to right, cyan, magenta);
	}
</style>
