<script setup lang="ts">
defineProps<{
  isOpen: {
    type: boolean
    default: false
  }
}>()

const emit = defineEmits<{
  (e: 'update:isOpen', value: boolean): void
}>()

const closeModal = () => {
  emit('update:isOpen', false)
}
</script>
<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header">默认标题</slot>
      </header>
      <main class="modal-body">
        <slot>默认内容</slot>
      </main>
      <footer class="modal-footer">
        <button @click="closeModal">关闭</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
}

.modal-header,
.modal-footer {
  padding: 10px 0;
  text-align: right;
}

.modal-body {
  padding: 20px 0;
}
</style>
