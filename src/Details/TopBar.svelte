<script lang="ts">
  import Buttons from "./TopBar/Buttons.svelte";
  import Header from "./TopBar/Header.svelte";
</script>

<div class="topbar">
  <Header />
  <Buttons />
</div>

<style scoped>
  .topbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border-bottom: var(--border-clr) 1px solid;
    padding: 10px;
    background-color: white;
  }
</style>
