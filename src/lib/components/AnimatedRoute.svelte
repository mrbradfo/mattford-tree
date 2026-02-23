<script>
    import { fly} from "svelte/transition";
    import { page } from "$app/state";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<!-- key is used to animate the route whenever the url changes -->
{#key page.url} 
  <div in:fly={{  x:'-100%', duration: 500 }}>
    {@render children?.()}
  </div>
{/key}