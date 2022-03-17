export const state = () => ({
  tasks: [],
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [
      { content: task, done: false, dragging: false },
      ...state.tasks,
    ]
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done
  },
  START_DRAG(state, task) {
    task.dragging = true
  },
  STOP_DRAG(state, task) {
    task.dragging = false
  },
}
