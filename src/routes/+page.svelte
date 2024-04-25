<script>
  export let data;
</script>

{#if data}
  <ul>
    {#each data.photos as photo}
      <li>{photo.name}</li>
      <!-- <img src={photo.url} alt={photo.name} /> -->
    {/each}
  </ul>
{:else}
  <p>No photos found.</p>
{/if}
<h1 class="text-3xl font-bold">Photos by Demi Ogun</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
