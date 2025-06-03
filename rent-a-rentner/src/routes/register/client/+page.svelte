<script>
    import "../../styles.css"
	let name = '';
	let email = '';
	let password = '';
	let location = '';
	let services = '';
</script>

<style>
    .registerform {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 250px;
        margin: 0 auto;
    }

    .login-highlight {
        color: #dec41c;
        text-decoration: none;
    }
    .login-highlight:hover {
        text-decoration: underline;
    }    

    .main .buttons button {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    transition: background-color 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .register {        
        display: block;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
</style>

<section class="main">
	<div class="register">
		<h1>Jetzt registrieren als <span class="highlight">Kunde</span>.</h1>
		
        <form class="registerform" method="POST">
            <input name="name" bind:value={name} placeholder="Name" required />
            <input name="email" type="email" bind:value={email} placeholder="E-Mail" required />
            <input name="password" type="password" bind:value={password} placeholder="Passwort" required />
            <input name="location" bind:value={location} placeholder="Ort" />
            <div class="buttons"><button class="primary" type="submit">Registrieren</button></div>
        </form>

        <p>Du hast bereits einen Account? <a class="login-highlight" href="/register">Jetzt anmelden</a>.</p>

	</div>
</section>
