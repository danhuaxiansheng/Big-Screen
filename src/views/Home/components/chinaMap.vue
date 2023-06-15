<template>
  <div class="chinaMap">
    <iframe
      class="centerMap"
      src="https://fanruan.landarun.com/webroot/decision/view/form?viewlet=map%252FmapIndex.frm"
    ></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
.chinaMap {
  position: relative;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.centerMap {
  width: 100%;
  height: 100%;
  border: 0;
  margin-top: -50px;
  transform: scale(1.1);
}
.littleMap {
  border: 1px solid #babbbc;
  width: 170px;
  height: 170px;
  border-radius: 5px;
  position: absolute;
  right: 30px;
  bottom: 20px;
}
.titleList {
  position: absolute;
  left: 463px;
  top: 263px;
}
.title {
  position: absolute;
  min-width: 140px;
  z-index: 999;
  box-shadow: 0px 0px 15px 2px #333;
}
.title span {
  display: inline-block;
  width: 0;
  height: 0;
  border: 16px solid;
  border-color: rgb(148, 150, 150) transparent transparent;
  position: absolute;
  left: 15px;
  z-index: 999;
}
.titleFirst {
  background: #6c7506;
  padding: 8px;
  font-weight: bold;
  color: #fff;
}
.title_num {
  display: inline-block;
}
.title_num :deep(span) {
  font-size: 12px;
  color: #fff;
}
.title p {
  padding: 8px;
  color: #fff;
  background: rgba(150, 150, 150, 0.8);
  font-size: 12px;
}
.circle {
  background: #dbe7f3;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 94px;
  left: 25px;
  z-index: 888;
}
.circle span {
  display: inline-block;
  background: #f2b600;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 6px;
  left: 6px;
  border-radius: 50%;
}
</style>
