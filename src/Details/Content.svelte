<script lang="ts">
  import zermelo from "../assets/zermelo.png";
</script>

<div class="content">
  <h1 class="header">Oorsprong van het SOS</h1>
  <p class="text">
    Toen het einde van mijn leerjaar 3 eraan zat te komen in juni 2022 merkte ik
    dat overzicht houden over alles wat er nog moest gebeuren niet makkelijk
    was. Ik verzon een oplossing: een excel document waarin ik al mijn
    opdrachten in een opzicht kon weergeven met notities, cijfers, alles in een.
    Ik deelde dit document met mijn twee mentoren zodat hun een actief beeld
    konden houden op de voortgang van mijn schooljaar-afronding. Toen alle
    opdrachten uiteindelijk af waren gerond zag mijn mentor hier potentieel in.
    Hij zette in magister voor de volgende mentor dat ik dat excel document
    volgend schooljaar weer moest gebruiken. Ik vond mijn excel echter een
    tijdelijke oplossing en zag het niet als gebruiksmiddel voor meerdere
    schooljaren.<br /><br />Dus begon ik te denken. Ik wou een minimalistisch,
    overzichtelijk systeem maken waarin ik op een oog opzicht kon zien welke
    opdrachten al af zijn en welke ik nog moet doen. Ik bedacht hierdoor het
    SOS. Het SOS is bedoeld om verduideliking te geven omtrent je
    schoolopdrachten en PTA’s.
  </p>
  <div class="features">
    <div class="feature">
      <div class="icon clr-red">
        <img src={zermelo} alt="Zermelo" />
      </div>
      <p class="header">Zermelo Integratie</p>
      <p class="capt">
        Zie je rooster met uitval, verplaatsingen, je opdrachten en meer, direct
        vanuit het SOS.
      </p>
    </div>
    <div class="feature">
      <div class="icon material-icons clr-aqua">remove_red_eye</div>
      <p class="header">Overzichtelijk</p>
      <p class="capt">
        Het ontwerp is gemaakt met overzicht in gedachten. Je opdrachten zijn
        duidelijk weergegeven zonder interrupties
      </p>
    </div>
    <div class="feature">
      <div class="icon material-icons clr-blue">speed</div>
      <p class="header">Snelheid</p>
      <p class="capt">
        Het SOS is geoptimaliseerd om zo snel als mogelijk te werken. Zo
        vertraagt het je schooldag niet.
      </p>
    </div>
  </div>
</div>

<style scoped>
  .content {
    position: fixed;
    /*     top: 50px;
    left: 0px;
    width: 100%;
    height: calc(100% - 50px); */
    box-sizing: border-box;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -o-ransform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }

  .content h1.header {
    font-size: 23px;
    font-weight: 700;
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
  }

  .content p.text {
    min-width: 890px;
    margin: 0 auto;
    width: 890px;
    line-height: 20px;
    margin-top: 10px;
  }

  .features {
    width: 900px;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .features .feature {
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .features .feature p {
    word-wrap: break-word;
  }

  .features .feature p.header {
    font-weight: bold;
  }

  .features .feature .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }

  .features .feature .icon img {
    height: 60px;
    padding: 20px;
  }

  .features .feature .icon.material-icons {
    font-size: 60px;
    padding: 20px;
    box-sizing: border-box;
    line-height: 60px;
    margin-bottom: -4px;
  }

  /* .features .feature {
    display: inline-gr;
  } */
</style>
