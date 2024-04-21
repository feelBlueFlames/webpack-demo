<script setup>
import { ref, defineAsyncComponent } from 'vue'
const isOpen = ref(false)
const DefModal = defineAsyncComponent(
  () =>
    new Promise((resolve) => {
      // 延迟加载
      setTimeout(() => {
        resolve(
          import(
            /* webpackPreload: true */ /* webpackChunkName: "DefModalCmp" */ './components/DefModal.vue'
          )
        )
      }, 1500)
    })
)
const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <div class="container">
    <button @click="openModal">OPEN MODALsss</button>
    <Suspense>
      <DefModal :isOpen="isOpen" @update:isOpen="(e) => (isOpen = e)" />
      <template #fallback>loading...</template>
    </Suspense>
  </div>
</template>

<style scoped>
.container {
  font-size: 20px;
  color: var(--primary-color);
  background-color: var(--text-color);
}
</style>
