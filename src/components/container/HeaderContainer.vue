<template>
  <header class="h-12 w-full flex flex-nowrap flex-row items-center justify-center border-b dark:border-gray-600 border-gray-300">
    <h2 class="align-middle w-1/5 text-center flex-1 select-none text-sm">
      {{ store.pageTitle }}
    </h2>
    <div class="flex w-1/3 flex-row-reverse pr-10 items-center">
      <ElButton color="#626aef">
        <ElIcon :size="size" :color="color" class="mr-1">
          <Download />
        </ElIcon>
        Export
      </ElButton>
      <el-switch
        class="mr-10"
        size="large"
        :active-icon="Moon"
        :inactive-icon="Sunny"
        :inline-prompt="inner"
        v-model="store.isDark"
        :style="switchClass"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
  import logoImage from '@/assets/ccLogo.png';
  import { ref, computed } from 'vue';
  import { Download, Sunny, Moon } from '@element-plus/icons-vue';
  import { usePageState } from '@/stores/pageState';
  const store = usePageState();
  const size = ref(14);
  const color = '#fff';
  const inner = ref(true);
  const switchClass = computed(() => ({
    '--el-switch-border-color': store.isDark ? '#4B5563' : '#D1D5DB',
    '--el-color-white': store.isDark ? '#F3F4F6' : '#374151'
  }));
  // TODO export
</script>
