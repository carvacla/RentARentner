<script>
	import "../styles.css"
    export let form;
</script>

<style>
	
</style>

<section class="main">
	<div>
		<h1>Dein <span class="highlight">Profil</span>.</h1>
		<p>
			Das bist du!
		</p>

        <form method="POST" action="?/delete">
            <button class="btn btn-danger">Mein Profil löschen.</button>
        </form>

        {#if form?.message}
            <p>{form.message}</p>
        {/if}
	</div>
</section>
