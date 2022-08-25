<div class="background">
  <div class="sq1" />
  <div class="sq2" />
</div>

<style scoped>
  div.background {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #2d7eb9;
    overflow: hidden;
  }

  div.sq1 {
    width: 200%;
    height: 300%;
    position: absolute;
    top: -50%;
    left: -150%;
    background-color: rgba(255, 255, 255, 0.05);
    transform: rotate(-16.35deg);
  }

  div.sq2 {
    height: 200%;
    width: 300%;
    position: absolute;
    bottom: -130%;
    left: -100%;
    background-color: rgba(255, 255, 255, 0.05);
    transform: rotate(-16.35deg);
  }
</style>
