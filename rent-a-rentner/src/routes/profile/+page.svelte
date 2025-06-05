<script>
	import "../styles.css"
    export let form;
</script>

<style>
	.btn-yellow {
        background-color: #dec41c;
        color: white;
        font-weight: bold;
        border: none;
        padding: 0.5rem 1rem;
        transition: background-color 0.2s ease;
    }

    .btn-yellow:hover {
    background-color: #c4b01a;
    }

</style>

<section class="main">
	<div>
		<h1>Dein <span class="highlight">Profil</span>.</h1>
		<p>
			Das bist du!
		</p>
        <div class="buttons">
            <form method="POST" action="/logout" style="display: inline;">
                <button class="btn btn-yellow" type="submit">Logout</button>
            </form>
            <form method="POST" action="?/delete">
                <button class="btn btn-danger">Mein Profil löschen.</button>
            </form>
        </div>
        

        {#if form?.message}
            <p>{form.message}</p>
        {/if}
	</div>
</section>
