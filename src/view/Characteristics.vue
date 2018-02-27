<template>
  <div class="characteristics">
      <div class="section-head">
          {{sectionTitle}}
      </div>
      <div class="section-body">
          <ChaInput class="cha-input"
            v-for="cha in getChaList" 
            :key="cha.name" 
            :chaName="cha.name" 
            :formula="cha.formula"
            />
      </div>
  </div>
</template>

<script>
import ChaInput from "./CharacteristicInput.vue";

export default {
  props: {
    chaList: {
      type: Array
    }
  },
  data() {
    return {
      getChaList: [
        { name: '力量 STR', formula: '3D6*5' },
        { name: '敏捷 DEX', formula: '2D6*5' },
        { name: '意志 POW', formula: '3D6*5' },
        { name: '体质 CON', formula: '3D6*5' },
        { name: '外貌 APP', formula: '3D6*5' },
        { name: '教育 EDU', formula: '(2D6+6)*5' },
        { name: '体型 SIZ', formula: '(2D6+6)*5' },
        { name: '智力 INT', formula: '(2D6+6)*5' }
      ],
      sectionTitle: 'Characteristics'
    };
  },
  components: {
      ChaInput
  }
};
</script>

<style scoped>
.section-body .cha-input {
  width: 255px;
  margin: 5px 10px;
}
</style>
