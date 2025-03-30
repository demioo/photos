<script>
  export let data;
</script>

<svelte:head>
  <title>Demi Ogun Photography</title>
  <meta
    name="description"
    content="Demi Ogun is a photographer based in Clerkenwell, London. He specialises in 35mm film photography."
  />
  {@html `<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    "name": "Demi Ogun Photography",
    "url": "https://www.demiogunphotography.com",
    "description": "Demi Ogun is a photographer based in Clerkenwell, London. He specialises in 35mm film photography."
  }
</script>`}
</svelte:head>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-2">
  {#if data && data.photos.length > 0}
    {#each data.photos as photo}
      {@const optimisedUrl = photo.url.split('upload/').join('upload/w_2500/f_auto/')}
      <div class="overflow-hidden">
        <img src={optimisedUrl} alt={photo.name} class="w-full aspect-3/2" />
      </div>
    {/each}
  {:else}
    <p>No photos found.</p>
  {/if}
</div>

<!-- placeholder photo 'https://images.ctfassets.net/r7p9m4b1iqbp/5IV5co85HjyYBn56Za2Pu6/cc12216918c66cd0505d604d72a5efdd/best-35mm-film-unsplash-eyespeak.jpg?w=1000' -->
