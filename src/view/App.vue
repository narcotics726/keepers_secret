<template>
  <div class="container">
    <div class="header testbox">
      <!-- 
        
       -->
       Keeper's Secret
    </div>
    <div class="left testbox">
      <!-- 
        nav menu here
       -->
       left
    </div>
    <div class="main testbox">
      <!--
        investigator sheet here.
      -->
      main
      <Characteristics />
    </div>
    <div class="footer testbox">
footer
    </div>
  </div>
</template>

<script>
import Characteristics from "./Characteristics.vue";

export default {
  data() {
    return { message: "Investigators" };
  },
  components: {
    Characteristics
  }
};
</script>

<style>
body {
  background-color: rgb(212, 212, 212);
}

* {
  box-sizing: border-box;
}
</style>

<style scoped>
.container {
    display: grid;
}
@media(max-width: 768px) {
  .container {
    grid-template-columns: 80px 2fr;
  }
}

@media (min-width: 769px) {
  .container {
    grid-template-columns: 200px 2fr;
  }
}

.testbox {
  border: 1px solid;
  min-height: 50px;
}

.header {
  grid-column: span 3;
}

.left {
  grid-column: 1;
}

.main {
  grid-column: 2 span 2;
}

.footer {
  grid-column: span 3;
}
</style>


