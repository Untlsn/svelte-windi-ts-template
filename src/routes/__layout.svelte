<script>
  import 'virtual:windi.css';
  import '$/app.css';
  import { browser } from '$app/env';
  if (browser) import('virtual:windi-devtools');
</script>

<svelte:head>
  <title>My App</title>
</svelte:head>

<slot />