<script lang="ts">
  import { onMount } from "svelte";

  import Content from "./Details/Content.svelte";
  import TopBar from "./Details/TopBar.svelte";

  let hide = true;

  onMount(() => {
    setTimeout(() => {
      hide = false;
    }, 100);
  });
</script>

<div class="details" class:hide>
  <TopBar />
  <Content />
</div>

<style scoped>
  .details {
    transition: opacity 0.3s, visibility 0.3s;
    background-color: #fff;
  }
  .hide {
    opacity: 0;
    visibility: hidden;
  }
</style>
