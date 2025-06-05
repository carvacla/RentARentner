<script>
	import { page } from '$app/stores';
	export let data;
</script>

<style>
	header {
		background-color: #0f172a;
		color: white;
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	header a {
		color: white;
		text-decoration: none;
		font-weight: bold;
		margin-right: 1.5rem;
		transition: opacity 0.2s ease;
	}

	header a:hover {
		opacity: 0.7;
	}

	main {
		min-height: calc(100vh - 160px); /* 160 px Footer */
        margin: 0;
		font-family: system-ui, sans-serif;
        height: 100%;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.logo a {
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		text-decoration: none;
	}

	.logo a:hover {
		color: #dec41c;
	}

	.navlinks a {
		margin-left: 1.5rem;
		text-decoration: none;
		color: white;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.navlinks a:hover {
		color: #dec41c;
	}
	
	footer {
		background-color: #0f172a;
		color: #cbd5e1;
		text-align: center;
		padding: 2rem;
		font-size: 0.9rem;
	}

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

<header class="navbar">
	<div class="logo">
		<a href="/">Rentner@Work</a>
	</div>
	<div class="navlinks">
		<a href="/about">Über uns</a>
		{#if data.user}
		<a href="rentner">Alle Rentner</a>
		<a href="/profile">🧓🏻 {data.email} </a>
		<form method="POST" action="/logout" style="display: inline;">
			<button class="btn btn-yellow" type="submit">Logout</button>
		</form>
        
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Registrieren</a>
		{/if}
  </div>
</header>

<main>
	<slot />
</main>

<footer>
	<p>&copy; {new Date().getFullYear()} Rentner@Work – Alle Rechte vorbehalten an Claudia Carvalho.</p>
</footer>
