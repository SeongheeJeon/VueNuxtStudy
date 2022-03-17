<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of task</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add</button>
    </div>

    <draggable class="tasks">
      <transition-group>
        <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
      </transition-group>
    </draggable>
  </main>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ''
      }
    },
  },
  components: {
    draggable,
  },
}
</script>
