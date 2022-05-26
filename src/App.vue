<template>
  <div>
    <p>这是是单文件组件的内容：{{msg}}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('Hello Vue3')

</script>