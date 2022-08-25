<script lang="ts">
  import Header from "./TopBar/Header.svelte";
  import Logo from "./TopBar/Logo.svelte";
</script>

<div class="topbar">
  <Header />
  <Logo />
</div>

<style scoped>
  .topbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 110px;
    padding: 30px;
    box-sizing: border-box;
    color: white;
  }
</style>
