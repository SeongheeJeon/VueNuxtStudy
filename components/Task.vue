<template>
  <div
    :class="`task ${task.done ? 'is-complete' : ''} ${
      task.dragging ? 'dragging' : ''
    }`"
    @dragstart="startDrag"
    @dragend="stopDrag"
  >
    <input type="text" class="content" v-model="content" />
    <div class="buttons">
      <button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
      <button @click="removeTask" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      content: this.task.content,
    }
  },
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task)
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task)
    },
    startDrag() {
      this.$store.commit('START_DRAG', this.task)
    },
    stopDrag() {
      this.$store.commit('STOP_DRAG', this.task)
    },
  },
}
</script>

<style></style>
