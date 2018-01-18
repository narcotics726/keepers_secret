<template>
  <div>
    <el-container>
      <el-header>Hello, {{ message }}</el-header>
      <el-aside></el-aside>
      <el-main>
        <el-row>
          <el-col :span="6">
            <div class="chaInfo"></div>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header">
                <span>属性</span>
              </div>
              <div class="text">
                <el-row :gutter="10">
                  <el-col :xs="24" :sm="16" :md="16" :lg="8" :xl="8">
                    <ChaInput chaName="STR"></ChaInput>
                  </el-col>
                  <el-col :xs="24" :sm="16" :md="16" :lg="8" :xl="8">
                    <ChaInput chaName="DEX"></ChaInput>
                  </el-col>
                  <el-col :xs="24" :sm="16" :md="16" :lg="8" :xl="8">
                    <ChaInput chaName="POW"></ChaInput>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">

          </el-col>
        </el-row>

      </el-main>
      <el-footer></el-footer>
    </el-container>
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
  background-color: darkgrey;
}

* {
  box-sizing: border-box;
}
</style>

<style scoped>
.chaInfo {
  width: 15%;
  height: 300px;
  display: inline-block;
  border: 1px solid green;
}

.chaChar {
  width: 55%;
  height: 300px;
  display: inline-block;
}
</style>


