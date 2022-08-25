<script lang="ts">
  import { onMount } from "svelte";
  import { showDetails } from "../ts/env";

  let release: GitHubRelease;

  const repo = "IzKuipers/SchoolSystem-Release-Channel";

  async function getLatestRelease() {
    const req = await (
      await fetch(`https://api.github.com/repos/${repo}/releases/latest`)
    ).json();

    release = req as GitHubRelease;
  }

  onMount(getLatestRelease);

  function D() {
    if (release) {
      window.open(release.assets[0].browser_download_url, "_blank");
    }
  }

  function M() {
    showDetails.set(true);
  }
</script>

<div class="content">
  <h1 class="header">Je PTA's. Overzichtelijk.</h1>
  <p class="subheader">
    Vind je het lastig om overzicht te houden over alle opdrachten en PTA's?
  </p>
  <p class="text">
    Het SOS is ontworpen om jou te helpen met het bijhouden van je
    schoolopdrachten.<br />
    Het heeft integratie met Zermelo, PTA ondersteuning, en andere tools die jou
    zullen<br />
    helpen in je reis naar je diploma. Je hebt misschien al over het SOS gehoord
    via docenten<br />
    en/of leerlingen op de Jozefmavo. Mooi! dan weet je al wat het is en wat het
    doet.<br />
    <br />
    Waar wacht je nog op? Neem een kijkje voor jezelf...
  </p>
  <div class="buttons">
    {#if release}
      <button class="clr-green" disabled={!release} on:click={D}
        >Download{release ? ` v${release.tag_name}` : `en`}</button
      >
      <button class="clr-blue" on:click={M}>Meer informatie</button><br />
    {/if}
  </div>
</div>

<style scoped>
  .content {
    position: absolute;
    /* top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
     */
    text-align: center;
    padding: 0;
    box-sizing: border-box;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -o-ransform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }

  p {
    text-align: left;
    max-width: 640px;
    margin: 0 auto;
    line-height: 30px;
    font-size: 15px;
    text-align: justify;
  }

  p.text {
    margin-bottom: 50px;
  }

  p.subheader {
    font-weight: 600;
  }

  h1.header {
    font-size: 35px;
    margin: 0 auto;
    font-weight: 900;
    margin-bottom: 60px;
  }

  div.buttons {
    width: fit-content;
    margin: 0 auto;
  }

  button {
    padding: 12px 34px;
    border: none;
    border-radius: 7.5px;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 0.7;
  }

  button:active {
    opacity: 0.3;
  }

  button:disabled {
    opacity: 0.5;
  }

  button + button {
    margin-left: 160px;
  }
</style>
