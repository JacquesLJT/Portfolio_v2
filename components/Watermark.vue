<!-- src/components/Watermark.vue -->
<template>
  <div class="watermark-container">
    <div class="watermark" v-for="index in 100" :key="index">
      TESTING - NOT FOR PRODUCTION
    </div>
  </div>
</template>

<script>
export default {
  name: 'Watermark',
};
</script>

<style scoped>
.watermark-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
  z-index: 9999;
  pointer-events: none;
}

.watermark {
  font-size: 1em;
  color: rgba(255, 0, 0, 0.3);
  transform: rotate(-45deg);
}
</style>
