export const state = () => ({
  tasks: [],
  completed: 0,
  total: 0,
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [
      { content: task, done: false, dragging: false },
      ...state.tasks,
    ]
    state.total += 1
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
    if (task.done === true) {
      state.completed -= 1
    }
    state.total -= 1
  },
  TOGGLE_TASK(state, task) {
    task.done === false ? (state.completed += 1) : (state.completed -= 1)
    task.done = !task.done
  },
  START_DRAG(state, task) {
    task.dragging = true
  },
  STOP_DRAG(state, task) {
    task.dragging = false
  },
}
