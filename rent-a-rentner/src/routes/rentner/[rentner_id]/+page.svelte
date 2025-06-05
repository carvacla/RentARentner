<script>
    import "../../styles.css"
    export let data;
    const rentner = data;
</script>

<style>
    .details {
	display: flex;
    gap: 7rem;
	margin-bottom: 2rem;
	flex-wrap: wrap;
    }

    .picture img {
        width: 500px;
        height: auto;
        border-radius: 8px;
    }

    .details-text {
        text-align: left;
        font-size: 10px;
        max-width: 500px;
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

<section class="main">
	<div>
        <h1>{rentner.first_name} {rentner.last_name}</h1>
        <div class="details">
            <div class="picture col-6">
                <img src={rentner.picture} alt="Bild" />
            </div>
            <div class="details-text">
                <p><strong>Vorname:</strong> {rentner.first_name}</p>
                <p><strong>Nachname:</strong> {rentner.last_name}</p>
                <p><strong>Ort:</strong> {rentner.location}</p>
                <p><strong>Services:</strong> {rentner.services}</p>
            </div>
        </div>
        <div class="buttons">
			<a class="primary" href="/rentner">Zurück</a>
             <form method="POST" action="?/create">
                <button class="btn btn-yellow">Jetzt Buchen.</button>
            </form>
        </div>
                   
	</div>
</section>
