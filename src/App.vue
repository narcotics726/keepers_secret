<template>
  <div>
    Hello, {{message}}!
    <ChaInput></ChaInput>
  </div>
  
</template>

<script>
import ChaInput from './CharacteristicInput.vue';

export default {
  data() {
      return { message: 'Investigators' };
  },
  components: {
    ChaInput
  }
};
</script>

<style>
body {
    background-color:darkgrey;
}

* {
  box-sizing: border-box;
}
</style>

