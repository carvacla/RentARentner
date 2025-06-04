<script>
    import "../../styles.css"
    export let data;
    const rentner = data;
</script>

<style>
    .picture img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
    .details {
        text-align: left;
        font-size: 1.2rem;
        max-width: 400px;
    }
</style>

<section class="main">
	<div>
        <h1>{rentner.first_name} {rentner.last_name}</h1>
        <div class="row mt-4">
            <div class="picture col-6">
                <img src={rentner.picture} alt="Bild" />
            </div>
        <div class="details">
            <p>Vorname: {rentner.first_name}</p>
            <p>Nachname: {rentner.last_name}</p>
            <p>Ort: {rentner.location}</p>
            <p>Services: {rentner.services}</p>
        </div>
        </div>
        <div class="buttons">
			<a class="primary" href="/rentner">Zurück</a>
        </div>
	</div>
</section>
