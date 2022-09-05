<script lang="ts">
  import { onMount } from "svelte";
  import { downloading, showDetails } from "../ts/env";

  let release: GitHubRelease;
  let noWindows = false;

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
      $downloading = true;
      setTimeout(() => {
        window.open(release.assets[0].browser_download_url, "_blank");
      }, 100);
    }
  }

  function M() {
    showDetails.set(true);
  }

  onMount(() => {
    noWindows = !navigator.userAgent.includes("Windows");
  });
</script>

<div class="content">
  <h1 class="header">Je PTA's. Overzichtelijk.</h1>
  <p class="subheader">
    Vind je het lastig om overzicht te houden over alle opdrachten en PTA's?
  </p>
  <p class="text">
    Het School Opdrachten Systeem is ontworpen om jou te helpen met het
    bijhouden van je schoolopdrachten. Het integreert met Zermelo, heeft PTA
    ondersteuning en andere hulpmiddelen die jou zullen helpen in je reis naar
    je diploma. Je hebt misschien al over het SOS gehoord via docenten en/of
    leerlingen op de Jozefmavo. Mooi! dan weet je al wat het is en wat het doet.<br
    />
    <br />
    En? Kies óók jij voor een overzichtelijk schooljaar?
  </p>
  <div class="buttons">
    {#if release}
      <button class="clr-green" disabled={!release || noWindows} on:click={D}>
        {noWindows
          ? "Downloaden kan op Windows"
          : `Download${release ? ` v${release.tag_name}` : `en`}`}
      </button>
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
    padding: 0 2em;
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
    min-width: 640px;
  }

  @media screen and (max-width: 700px) {
    p.text {
      min-width: unset;
    }

    p {
      text-align: left;
      line-height: 20px;
    }

    .header {
      margin-bottom: 30px !important;
    }

    p.subheader {
      margin-bottom: 10px;
    }

    .buttons button {
      margin: 0;
      margin-bottom: 10px;
      display: block;
      width: 100% !important;
      text-align: left;
      padding: 15px 20px;
      position: relative;
      font-size: 14px;
    }

    .buttons button::after {
      content: "arrow_forward_ios";
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 15px;
      font-family: "Material Icons";
      display: block;
      width: 10px;
      height: 10px;
    }

    .buttons {
      width: 100% !important;
      margin: 0 !important;
      display: block;
    }

    .content {
      left: 0;
      transform: translateY(-50%);
      -o-ransform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }
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
