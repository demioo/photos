<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();
</script>

<Header />

<slot />
