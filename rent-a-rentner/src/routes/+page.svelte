<script>
	import "./styles.css"
	export let data;
</script>

<style>
	
</style>

<section class="main">
	<div>
		<h1>Rent a <span class="highlight">Rentner</span>.</h1>
		<p>
			Rent someone great.
		</p>
		<div class="buttons">
			{#if data.user}
				<a class="primary" href="/profile">Mein Profil</a>
				<a class="primary" href="/rentner">Alle Rentner</a>
			{/if}			
			{#if !data.user}
				<a class="secondary" href="/register">Jetzt Registrieren</a>
			{/if}
		</div>
	</div>
</section>
