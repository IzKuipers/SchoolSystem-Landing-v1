<script lang="ts">
  import { onMount } from "svelte";

  import { showDetails } from "../../ts/env";

  function B() {
    showDetails.set(false);
  }

  function M() {
    window.open("https://jozefmavo.github.io/SOS%20handleiding.pdf", "_blank");
  }

  const repo = "IzKuipers/SchoolSystem-Release-Channel";

  async function D() {
    const req = await (
      await fetch(`https://api.github.com/repos/${repo}/releases/latest`)
    ).json();

    const release = req as GitHubRelease;

    window.open(release.assets[0].browser_download_url, "_blank");
  }

  let noWindows = false;

  onMount(() => {
    noWindows = !navigator.userAgent.includes("Windows");
  });
</script>

<div class="buttons">
  <button class="material-icons clr-orange" on:click={B}
    >arrow_back_ios_new</button
  >
  <button class="material-icons clr-blue" on:click={M}>menu_book</button>
  <button class="clr-green" on:click={D} disabled={noWindows}>
    <span class="material-icons">download</span> Downloaden
  </button>
</div>

<style scoped>
  .buttons {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  button {
    border-radius: 5px;
    border: none;
    height: 30px;
    vertical-align: middle;
    padding: 0 5px;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.7;
  }

  button:active {
    opacity: 0.4;
  }

  button:disabled {
    opacity: 0.5;
  }

  button.material-icons {
    padding: 0;
    font-size: 20px;
    width: 30px;
    height: 30px;
  }

  button .material-icons {
    font-size: 20px;
  }

  button * {
    vertical-align: middle;
  }
</style>
