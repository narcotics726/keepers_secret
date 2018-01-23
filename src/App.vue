<template>
  <div class="container">
    <div class="header">
      <!-- 
       -->
    </div>
    <div class="left">
      <!-- 
        nav menu here
       -->
    </div>
    <div class="main">
      <!--
        investigator sheet here.
      -->
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import ChaInput from "./CharacteristicInput.vue";

export default {
  data() {
    return { message: "Investigators" };
  },
  components: {
    ChaInput
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

</style>


