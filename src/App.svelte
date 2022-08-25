<script lang="ts">
  import "./css/main.css";
  import Details from "./Details.svelte";
  import Main from "./Main.svelte";
  import { showDetails } from "./ts/env";
</script>

{#if !$showDetails}
  <Main />
{:else}
  <Details />
{/if}
