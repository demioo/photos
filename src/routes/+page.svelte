<script>
  export let data;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {#if data && data.photos.length > 0}
    {#each data.photos as photo}
      <div class="relative overflow-hidden">
        <img
          src="https://images.ctfassets.net/r7p9m4b1iqbp/5IV5co85HjyYBn56Za2Pu6/cc12216918c66cd0505d604d72a5efdd/best-35mm-film-unsplash-eyespeak.jpg?w=1000"
          alt={photo.name}
          class="inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="relative overflow-hidden">
        <img
          src="https://images.ctfassets.net/r7p9m4b1iqbp/5IV5co85HjyYBn56Za2Pu6/cc12216918c66cd0505d604d72a5efdd/best-35mm-film-unsplash-eyespeak.jpg?w=1000"
          alt={photo.name}
          class="inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="relative overflow-hidden">
        <img
          src="https://briandsmithphotography.com/static/media/uploads/blog/fortogs/twice-exposed-roll/.thumbnails/1910-kodak-tri-x-35mm-film-double-exposure-twice-shot-roll-portraits-00020_web.jpg/1910-kodak-tri-x-35mm-film-double-exposure-twice-shot-roll-portraits-00020_web-1000x0.jpg"
          alt={photo.name}
          class="inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="relative overflow-hidden">
        <img
          src="https://images.ctfassets.net/r7p9m4b1iqbp/5IV5co85HjyYBn56Za2Pu6/cc12216918c66cd0505d604d72a5efdd/best-35mm-film-unsplash-eyespeak.jpg?w=1000"
          alt={photo.name}
          class="inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="relative overflow-hidden">
        <img
          src="https://images.ctfassets.net/r7p9m4b1iqbp/5IV5co85HjyYBn56Za2Pu6/cc12216918c66cd0505d604d72a5efdd/best-35mm-film-unsplash-eyespeak.jpg?w=1000"
          alt={photo.name}
          class="inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="relative overflow-hidden">
        <img
          src="https://images.ctfassets.net/r7p9m4b1iqbp/5IV5co85HjyYBn56Za2Pu6/cc12216918c66cd0505d604d72a5efdd/best-35mm-film-unsplash-eyespeak.jpg?w=1000"
          alt={photo.name}
          class="inset-0 w-full h-full object-cover"
        />
      </div>
    {/each}
  {:else}
    <p>No photos found.</p>
  {/if}
</div>
