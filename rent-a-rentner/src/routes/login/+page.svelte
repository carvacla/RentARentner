<script>
    import "../styles.css"
	let email = '';
	let password = '';
</script>

<style>
    .loginform {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 250px;
        margin: 0 auto;
    }

    .register-highlight {
        color: #dec41c;
        text-decoration: none;
    }
    .register-highlight:hover {
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

    .login {        
        display: block;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }
</style>


<section class="main">
	<div class="login">
		<h1>Ihr <span class="highlight">Login</span>.</h1>
		
        <form class="loginform" method="POST" action="?/login">
            <input name="email" bind:value={email} placeholder="E-Mail" required />
            <input name="password" type="password" bind:value={password} placeholder="Passwort" required />
            <div class="buttons"><button class="primary" type="submit">Einloggen</button></div>
        </form>

        <p>Hast du noch keinen Account? <a class="register-highlight" href="/register">Jetzt registrieren</a>.</p>

	</div>
</section>