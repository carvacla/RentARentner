<script>
	import RentnerCard from '$lib/components/RentnerCard.svelte';
	let { data } = $props();

	let rentner = $derived.by(() => {
		return data.rentner
  	});

</script>

<style>
	.rentner {
		background: #0f172a;
		color: white;
		padding: 2rem;
		box-sizing: border-box;
		}

	.title {
		text-align: center;
		margin-bottom: 2rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
		gap: 10px;
		justify-items: center;
		width: 100%;
	}

	.rentner h1 {
		font-size: 2.5rem;
		font-weight: 800;
		margin-bottom: 1rem;
	}

	.rentner h1 .highlight {
		color: #dec41c;
	}

	.rentner p {
		font-size: 1.25rem;
		color: #cbd5e1;
		max-width: 600px;
		margin: 0 auto 2rem;
	}


    .title {
        align-items: top;
    }

	@media (min-width: 768px) {
		
		.rentner h1 {
			font-size: 3rem;
		}
	}
</style>

<section class="rentner">
	<div class="title">
		<h1>Ihre <span class="highlight">Rentner</span>.</h1>
		<p>
			Rent someone great.
		</p>
	</div>	
	<div class="row cards">
		{#each data.rentner as person}
			<div class="col-sm-6 col-md-6 col-lg-8 mb-4 gx-4">
				<RentnerCard rentner={person} />
			</div>
		{/each}
	</div>
</section>
