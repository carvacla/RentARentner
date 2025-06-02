<script>
  import { enhance } from '$app/forms';
  let { rentner } = $props();
</script>

<div class="rentner-card">
  <div>
    <img class="img-fluid" src={rentner.poster} alt="" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/rentner/" + movie._id}>{movie.title}</a>
    </div>
    <div>
      Jahr: {rentner.year}
    </div>
    <div>
      Dauer: {rentner.length}
    </div>
    {#if rentner.watchlist}
      <form method="POST" action="?/removeFromWatchlist" use:enhance>
        <input type="hidden" name="id" value={movie._id} />
        <button class="btn btn-danger">Von Watchlist entfernen</button>
      </form>
    {/if}
    {#if !rentner.watchlist}
      <form method="POST" action="?/addToWatchlist" use:enhance>
        <input type="hidden" name="id" value={movie._id} />
        <button class="btn btn-success">Auf die Watchlist</button>
      </form>
    {/if}
  </div>
</div>

<style>
  .rentner-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>
