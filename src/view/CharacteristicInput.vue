<template>
  <div class="characteristicInput" >
      <div class="dice-btn" v-on:click="dice" ></div>
      <div class="percentage" :style="percentage"></div>
      <label for="" >
          {{ cName }}
      </label>
      <input type="text" class="chaVal" v-model="cVal">
      <input type="text" class="chaVal-half" v-model="chaValHalf">
      <input type="text" class="chaVal-fifth" v-model="chaValFifth">
  </div>
</template>

<script>
import { evaluate } from "../lib/dice_eval";
export default {
  props: {
    chaName: {
      type: String,
      default: "Characteristic"
    },
    chaVal: {
      type: Number,
      default: 0
    },
    formula: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cName: this.chaName,
      cVal: this.chaVal
    };
  },
  computed: {
    chaValHalf() {
      return Math.floor(this.cVal / 2);
    },
    chaValFifth() {
      return Math.floor(this.cVal / 5);
    },
    percentage() {
      return `height: ${this.cVal}%;`;
    }
  },
  methods: {
    dice: function() {
      const res = evaluate(this.formula);
      this.cVal = res;
    }
  }
};
</script>
<style scoped>
.characteristicInput {
  display: inline-block;
  width: 100%;
  height: 52px;
  position: relative;
  border: 1px solid green;
}

.dice-btn {
    float: left;
    width: 10%;
    height: 100%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgZmlsbD0iIzAwMDAwMCIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTk1Mi4zNjIxNikiPjxwYXRoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtkaXJlY3Rpb246bHRyO2Jsb2NrLXByb2dyZXNzaW9uOnRiO3dyaXRpbmctbW9kZTpsci10YjtiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGQ9Im0gNDkuOTk5OTk5LDk1Ny4zNjIxNiAtMzguOTcxMzM1LDIyLjQ5OTcgMCw0NS4wMDA2NCAxLjI5MDYwNCwwLjc0NTcgMzcuNjgwNzMxLDIxLjc1NCAzOC45NzEzMzcsLTIyLjQ5OTcgMCwtNDUuMDAwNjQgLTM4Ljk3MTMzNywtMjIuNDk5NyB6IG0gMCw3LjU5NDkgMTUuNTY1ODYxLDIzLjAyNDYgLTMxLjEzMTcyMiwwIDE1LjU2NTg2MSwtMjMuMDI0NiB6IG0gLTguNDI1MSwzLjIzNjEgLTEyLjc5OTA3MiwxOC45MzE4IC05Ljk5NTc4NywtNS43NzA2IDIyLjc5NDg1OSwtMTMuMTYxMiB6IG0gMTYuODUxNDI3LDAgMjIuNzkzNjMyLDEzLjE1OTkgLTkuOTk0NDk1LDUuNzcwNiAtMTIuNzk5MTM3LC0xOC45MzA1IHogbSAtNDIuMjMwMDc4LDE3LjYzNDggOS45OTcwMTQsNS43NzA3IC05Ljk5NzAxNCwyMC41NTE3NCAwLC0yNi4zMjI0NCB6IG0gNjcuNjA3NTAyLDAgMCwyNi4zMjM3NCAtOS45OTcwNzksLTIwLjU1MzA0IDkuOTk1Nzg3LC01Ljc3MDcgeiBtIC00OS43NTk0NDIsNy4zMiAzMS45MTEzODIsMCAtMTUuOTU1NjkxLDI3LjYzNjk0IC0xNS45NTU2OTEsLTI3LjYzNjk0IHogbSAtNC4yODA2MzMsMi45MjE5IDE1LjU2NzA4OSwyNi45NjA3NCAtMjcuNzIyNzk2LC0xLjk2ODEgMTIuMTU1NzA3LC0yNC45OTI2NCB6IG0gNDAuNDcyNjQ4LDAgMTIuMTU2OTM1LDI0Ljk5MjY0IC0yNy43MjI3MzIsMS45NjgxIDE1LjU2NTc5NywtMjYuOTYwNzQgeiBtIC00NS42MTc1NTksMzAuNjcxMTQgMjIuNzk3NDQzLDEuNjE5OSAwLDExLjU0MjYgLTIyLjc5NzQ0MywtMTMuMTYyNSB6IG0gNTAuNzYzNjk3LDAgLTIyLjc5ODY3LDEzLjE2MjUgMCwtMTEuNTQyNiAyMi43OTg2NywtMS42MTk5IHoiLz48L2c+PC9zdmc+");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.dice-btn:hover {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgZmlsbD0iIzcwQzA0MSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTk1Mi4zNjIxNikiPjxwYXRoIHN0eWxlPSJjb2xvcjojMDAwMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtkaXJlY3Rpb246bHRyO2Jsb2NrLXByb2dyZXNzaW9uOnRiO3dyaXRpbmctbW9kZTpsci10YjtiYXNlbGluZS1zaGlmdDpiYXNlbGluZTt0ZXh0LWFuY2hvcjpzdGFydDt3aGl0ZS1zcGFjZTpub3JtYWw7Y2xpcC1ydWxlOm5vbnplcm87ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0aW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xvcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTtmaWxsOiM3MEMwNDE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTttYXJrZXI6bm9uZTtjb2xvci1yZW5kZXJpbmc6YXV0bztpbWFnZS1yZW5kZXJpbmc6YXV0bztzaGFwZS1yZW5kZXJpbmc6YXV0bzt0ZXh0LXJlbmRlcmluZzphdXRvO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiIGQ9Im0gNDkuOTk5OTk5LDk1Ny4zNjIxNiAtMzguOTcxMzM1LDIyLjQ5OTcgMCw0NS4wMDA2NCAxLjI5MDYwNCwwLjc0NTcgMzcuNjgwNzMxLDIxLjc1NCAzOC45NzEzMzcsLTIyLjQ5OTcgMCwtNDUuMDAwNjQgLTM4Ljk3MTMzNywtMjIuNDk5NyB6IG0gMCw3LjU5NDkgMTUuNTY1ODYxLDIzLjAyNDYgLTMxLjEzMTcyMiwwIDE1LjU2NTg2MSwtMjMuMDI0NiB6IG0gLTguNDI1MSwzLjIzNjEgLTEyLjc5OTA3MiwxOC45MzE4IC05Ljk5NTc4NywtNS43NzA2IDIyLjc5NDg1OSwtMTMuMTYxMiB6IG0gMTYuODUxNDI3LDAgMjIuNzkzNjMyLDEzLjE1OTkgLTkuOTk0NDk1LDUuNzcwNiAtMTIuNzk5MTM3LC0xOC45MzA1IHogbSAtNDIuMjMwMDc4LDE3LjYzNDggOS45OTcwMTQsNS43NzA3IC05Ljk5NzAxNCwyMC41NTE3NCAwLC0yNi4zMjI0NCB6IG0gNjcuNjA3NTAyLDAgMCwyNi4zMjM3NCAtOS45OTcwNzksLTIwLjU1MzA0IDkuOTk1Nzg3LC01Ljc3MDcgeiBtIC00OS43NTk0NDIsNy4zMiAzMS45MTEzODIsMCAtMTUuOTU1NjkxLDI3LjYzNjk0IC0xNS45NTU2OTEsLTI3LjYzNjk0IHogbSAtNC4yODA2MzMsMi45MjE5IDE1LjU2NzA4OSwyNi45NjA3NCAtMjcuNzIyNzk2LC0xLjk2ODEgMTIuMTU1NzA3LC0yNC45OTI2NCB6IG0gNDAuNDcyNjQ4LDAgMTIuMTU2OTM1LDI0Ljk5MjY0IC0yNy43MjI3MzIsMS45NjgxIDE1LjU2NTc5NywtMjYuOTYwNzQgeiBtIC00NS42MTc1NTksMzAuNjcxMTQgMjIuNzk3NDQzLDEuNjE5OSAwLDExLjU0MjYgLTIyLjc5NzQ0MywtMTMuMTYyNSB6IG0gNTAuNzYzNjk3LDAgLTIyLjc5ODY3LDEzLjE2MjUgMCwtMTEuNTQyNiAyMi43OTg2NywtMS42MTk5IHoiLz48L2c+PC9zdmc+");
}

.percentage {
  position: absolute;
  display: inline-block;
  border: none;
  width: 35%;
  height: 100%;
  left: 10%;
  bottom: -1px;
  background-color: rgba(34, 139, 34, 0.445);
}

.characteristicInput label {
  width: 35%;
  line-height: 50px;
  text-align: center;
  float: left;
}

.characteristicInput input {
  width: 25%;
  height: 50px;
  display: inline-block;
  text-align: center;
  border: none;
  padding: 0;
}

.characteristicInput input.chaVal {
  width: 30%;
  float: left;
  border-right: 1px solid;
  font-size: large;
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


