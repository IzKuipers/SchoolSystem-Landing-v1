<script lang="ts">
  import { showDetails } from "../ts/env";

  import Buttons from "./TopBar/Buttons.svelte";
  import Header from "./TopBar/Header.svelte";
</script>

<div class="topbar" class:show={$showDetails}>
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

    margin-top: -30px;
    opacity: 0;
    visibility: hidden;

    transition: visibility 0.3s, opacity 0.3s, margin-top 0.3s;
  }

  .topbar.show {
    visibility: visible;
    opacity: 1;
    margin-top: 0;
  }
</style>
