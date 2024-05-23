<template>
	<div class="container p-0">
		<div class="d-flex">
			<div class="card main-div w-100">
				<div class="p-3 bg-image h-100">
					<h2 class="mb-1 day overlay">Tuesdays</h2>
					<p class="text-light date mb-0">Date</p>
					<small>Time</small>
					<h2 class="place">
						<i
							ref="exampleRef"
							class="fa fa-location"
							>Hanoi <small>Country</small></i
						>
					</h2>
					<div class="temp">
						<h1 class="weather-app">19&deg;</h1>
						<h2 class="text-light">Description</h2>
					</div>
				</div>
			</div>
			<div class="card card-2 w-100">
				<table class="m-4">
					<tbody>
						<tr>
							<th>Sea level</th>
							<td>100</td>
						</tr>
						<tr>
							<th>Sea level</th>
							<td>100</td>
						</tr>
						<tr>
							<th>Sea level</th>
							<td>100</td>
						</tr>
					</tbody>
				</table>

				<DayWeather />

				<div
					class="d-flex m-3 justify-content-center"
					id="div_form"
				>
					<form action="">
						<input
							type="button"
							class="btn change-btn btn-primary"
							value="Change location"
						/>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DayWeather from './DayWeather.vue'
	import {ref, onMounted} from 'vue';
	export default (await import('vue')).defineComponent({
		name: 'WeatherApp',
		components: {
			DayWeather,
		},
		setup(){
		const getRef = this.ref.exampleRef;
		onMounted(()=>{
			console.log('🚀 ~ file: WeatherApp.vue:166 ~ getRef:', getRef)
		})
	}
	})
</script>

<style>
	body {
		background-color: #343d4d;
	}
	.weather-app {
		margin: 0;
		font-weight: 700;
		font-size: 4em;
	}
	h2.mb-1.day {
		font-size: 3rem;
		font-weight: 400;
	}

	.main-div {
		border-radius: 20px;
		color: #fff !important;
		transition: 0.5s ease;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('../assets/beach-bg.jpg') !important;
	}
	.temp-div {
		position: absolute;
		bottom: 0;
	}
	.main-div:hover {
		transform: scale(1.2);
		z-index: 1;
	}
	.card {
		background-color: rgb(100, 100, 100) !important;
	}
	.bg-image {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.card-2 {
		background-color: #212730;
		border-radius: 20px;
	}
	.card-details {
		margin-left: 19px;
	}
	.h1_left {
		position: absolute;
		bottom: 25px;
		left: 16px;
		font-size: 3vw;
		line-height: 1.2;
	}
	.h3_left {
		position: absolute;
		left: 16px;
		font-size: 2vw;
		line-height: 0.5;
	}
	.h3_left small {
		font-size: 1rem;
	}
	table {
		position: relative;
		left: 15px;
		border-collapse: separate;
		border-spacing: 15px;
		width: 85%;
		text-align: left;
		max-width: 600px;
		margin: 0 auto;
	}
	th,
	td {
		font-size: 18px;
		color: #fff;
	}
	td {
		text-align: right;
	}
	table,
	tr:hover {
		color: red;
	}
	.change_btn {
		background-image: linear-gradient(to right, cyan, magenta);
	}
	.change_btn:hover {
		transform: scale(0.9);
	}
</style>
