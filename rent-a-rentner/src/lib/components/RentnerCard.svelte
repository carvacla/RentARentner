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
      <a href={"/rentner/" + rentner._id}>{rentner.firstname}</a>
    </div>
    <div>
      Vorname: {rentner.firstname}
    </div>
    <div>
      Nachname: {rentner.lastname}
    </div>
    <div>
      Ort: {rentner.location}
    </div>
    <div>
      Skills/Services: {rentner.services.join(', ')}
    </div>
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
