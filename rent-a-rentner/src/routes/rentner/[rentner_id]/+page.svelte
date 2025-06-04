<script>
  export let data;
  let rentner = data.rentner;
</script>

<a href="/rentner">Back</a>

<h1>{rentner.firstname}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={movie.poster} alt="" />
  </div>

  <div class="col">
    <p>Vorname: {movie.firstname}</p>
    <p>Nachname: {movie.lastname}</p>
    <p>Ort: {rentner.location}</p>
  </div>
</div>
