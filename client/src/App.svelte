<script lang="ts">

	import axios from 'axios'

	let baseUrl = 'http://localhost:3000/api'
	let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklkIjo3LCJyb2xlIjoiVVNFUiIsImlhdCI6MTY1MTE2MzkwMSwiZXhwIjoxNjUxMTcxMTAxfQ.P1vB0D4fi6q11Z4VSKkPEI301NdE2-YGLXFCoYtjy8I'
	let config = {
		headers: {
			Authorization: token
		}
	}

	let loading = ''

	let name: string = ''
	let path: string = ''
	let time: string = ''

	let complexes = []

	function fetch() {
		axios.get(`${baseUrl}/complex`, config)
			 .then(res => {
				 complexes = res.data.complexes.reverse()
				 loading = ''
			 })
			 .catch(error => {
				console.error(error);
			 })
	}

	function deleteOne(id: number) {
		axios.delete(`${baseUrl}/complex/${id}`, config)
			 .then(res => {
				 complexes = complexes.filter(complex => complex.id !== id)
			 })
			 .catch(error => {
				console.error(error);
			 })
	}

	function convertDurationtoSeconds(duration: string){
		const [hours, minutes] = duration.split(':');
		return (Number(hours) * 60 * 60 + Number(minutes) * 60)  * 1000;
	};

	function sendForm(target: SubmitEvent) {
		loading = 'disabled'

		let data = {
			name,
			path,
			time: convertDurationtoSeconds(time)
		}
		axios.post(`${baseUrl}/complex`, data, config)
			 .then(res => {
				fetch()
			 })
			 .catch(err => {
				 console.error(err)
			 })
	}
</script>

<main class="container py-5 d-flex flex-column gap-3">
	<form action="https://eonix.herokuapp.com/api/complex" class="d-flex justify-content-center align-items-center gap-3" method="post" on:submit|preventDefault={sendForm}>
		<h5 class="w-100">Add Complex</h5>
		<input name="name" type="text" class="form-control" placeholder="name" bind:value={name} >
		<input name="path" type="text" class="form-control" placeholder="path" bind:value={path} >
		<input name="time" type="time" class="form-control" placeholder="time" bind:value={time} >
		<button type="submit" class="btn btn-primary">Send</button>
	</form>

	<h4 class="mt-5 flex justify-content-between">All Complexes: <button class="btn btn-primary" on:click={fetch} >Fetch</button> </h4>

	<table class="table">
		<thead>
		  <tr>
			<th scope="col">#</th>
			<th scope="col">Name</th>
			<th scope="col">Path</th>
			<th scope="col">Action</th>
		  </tr>
		</thead>
		<tbody>
			{#each complexes as complex }
			<tr>
				<th scope="row">{complex.id}</th>
				<td>{complex.name}</td>
				<td>{complex.path}</td>
				<td>
					<button on:click={() => deleteOne(complex.id)} class="btn btn-sm btn-danger">Delete</button>
				</td>
	    	</tr>
			{/each}
		</tbody>
	  </table>

</main>

