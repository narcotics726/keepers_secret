<template>
  <div class="characteristicInput">
      <label for="">
          {{ chaName }}
      </label>
      <input type="text" class="chaVal">
      <input type="text" class="chaVal-half">
      <input type="text" class="chaVal-fifth">
  </div>
</template>

<script>
export default {
    data() {
        return {
            chaName: '属性名'
        }
    }
}
</script>
<style scoped>
.characteristicInput {
    display: inline-block;
    background-color: grey;
    width: 200px;
    height: 50px;
}

.characteristicInput label {
    display: inline-block;
    width: 50px;
    height: 50px;
}

.characteristicInput input.chaVal {
    width: 75px;
    height: 50px;
    display: inline-block;
}

.characteristicInput input.chaVal-half {
    width: 75px;
    height: 25px;
    display: inline-block;
}

.characteristicInput input.chaVal-fifth {
    width: 75px;
    height: 25px;
    display: inline-block;
}
</style>


