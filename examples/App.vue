<script setup lang="ts">
  import { ref } from 'vue';
  import { onMounted } from '@vue/runtime-core';
  import { generate } from 'color-generate';
  // import { generate } from '../src';

  const primaryColor = ref<string>('#099dfd');
  let colors = ref<string[]>([]);

  const onChange = (color: string) => {
    colors.value = generate(color);
  }

  onMounted(() => {
    colors.value = generate(primaryColor.value);
  })
</script>

<template>
  <div class="examples">
    <div class="wrapper">
      <div class="primary-color">主色: {{ primaryColor }}</div>
      <el-color-picker v-model="primaryColor" @change="onChange"/>
    </div>

    <div class="colors">
      <template v-for="item of colors">
          <div class="colors-item" :style="{backgroundColor: item}">{{ item }}</div>
      </template>
    </div>

    <a class="info" target="_blank" href="https://color-generate-docs.sh2.agoralab.co/#/">点击了解更多</a>
  </div>
</template>


<style lang="scss">
* {
  box-sizing: border-box;
}

html, body, #app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>

<style scoped lang="scss">
.examples {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .primary-color {
      color: #5c6b77;
      font-size: 22px;
      font-weight: 500;
      margin-right: 20px;
    }
  }
  .colors {
    border-radius: 8px;
    .colors-item {
      width: 400px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      padding: 0 20px;
      font-size: 12px;
      cursor: pointer;
    }
  }

  .info {
    display: block;
    color: #5c6b77;
    font-size: 12px;
    margin-top: 20px;
  }
}
</style>
