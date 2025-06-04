<script>
  import { enhance } from '$app/forms';
  let { rentner } = $props();
</script>

<style>
.rentner-card {
  border-radius: 1rem;
  background-color: rgb(19, 45, 63);
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin: 0 auto;
  font-size: 1.1rem;
}

.rentner-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.picture {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #dec41c;
}

.details {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

</style>


<div class="rentner-card">
  <div>
    <img class="picture" src={rentner.picture} alt="" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/rentner/" + rentner._id}>{rentner.first_name} {rentner.last_name}</a>
    </div>
    <div>
      {rentner.first_name} {rentner.last_name}
    </div>
    <div>
      Ort: {rentner.location}
    </div>
  </div>
</div>