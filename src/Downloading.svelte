<script lang="ts">
  import defenderInstructions from "./assets/defender/defender_instructions.png";
  import { downloading } from "./ts/env";

  function closeThis() {
    downloading.set(false);
  }
</script>

<div class="downloading" class:show={$downloading}>
  <button class="close material-icons" on:click={closeThis}>close</button>
  <h1>Je download is bezig!</h1>
  <p>
    Bedankt voor het downloaden van het SOS. Het zal jou helpen met het
    bijhouden van je PTA opdrachten gedurende het schooljaar.
  </p>
  <div class="note">
    <span class="material-icons"> warning </span>
    <span
      >Let op: je zal een waarschuwing krijgen dat je PC wordt beschermd, en dat
      het SOS installatie-bestand mogelijk schadelijk is. Het SOS is enkel
      bedoeld om jou te ondersteunen, niks anders. In Microsoft Defender
      Smartscreen kan je op "Meer informatie" en dan "Toch uitvoeren" klikken.<br
      /><br /><b>Voorbeeld:</b>
    </span>
    <img alt="Windows Defender instructie" src={defenderInstructions} />
  </div>
</div>

<style scoped>
  div.downloading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 700px;
    height: 640px;
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    color: #333;
    text-align: center;
    box-shadow: 0 0 15px 0 #0007;
    margin-top: 30px;
    opacity: 0;
    visibility: hidden;

    transition: visibility 0.3s, opacity 0.3s, margin-top 0.3s;
  }

  .downloading.show {
    visibility: visible;
    opacity: 1;
    margin-top: 0;
  }

  .note {
    display: grid;
    grid-template-columns: 30px auto;
    grid-template-rows: auto auto;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  .note * {
    text-align: left;
  }

  img {
    /* height: 250px; */
    width: inherit;
    margin: 0 auto;
    margin-top: 10px;
    grid-row: 2;
    grid-column-start: span 3;
    grid-column-end: none;
  }

  button.close.material-icons {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
  }
</style>
