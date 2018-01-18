<template>
  <div class="characteristicInput">
      <div class="percentage"></div>
      <label for="">
          {{ chaName }}
      </label>
      <input type="text" class="chaVal" v-model="chaVal">
      <input type="text" class="chaVal-half" v-model="chaValHalf">
      <input type="text" class="chaVal-fifth" v-model="chaValFifth">
  </div>
</template>

<script>
export default {
    props: {
        chaName: {
            type: String,
            default: "Characteristic"
        },
        chaVal: {
            type: Number,
            default: 0
        }
    },
    computed: {
        chaValHalf () {
            return Math.floor(this.chaVal / 2);
        },
        chaValFifth () {
            return Math.floor(this.chaVal / 5);
        }
    }
}
</script>
<style scoped>

.characteristicInput {
    display: inline-block;
    width: 100%;
    height: 52px;
    position: relative;
    border: 1px solid green;
}

.percentage {
    position: absolute;
    display: inline-block;
    border: none;
    width: 25%;
    height: 100%;
    left: 0;
    bottom: -1px;
    background-color: rgba(34, 139, 34, 0.445);
}

.characteristicInput label {
    width: 25%;
    line-height: 50px;
    text-align: center;
    float: left;
}

.characteristicInput input {
    width: 35%;
    height: 50px;
    display: inline-block;
    text-align: center;
    border: none;
    padding: 0;
}

.characteristicInput input.chaVal {
    width: 40%;
    float: left;
    border-right: 1px solid;
}

.characteristicInput input.chaVal-half {
    height: 25px;
    float: right;
    border-bottom: 1px solid;
}

.characteristicInput input.chaVal-fifth {
    height: 25px;
    float: right;
}
</style>


