export default {
  namespaced: true,
  state: {
    selected_task: {
      is_edit: false,
      task: null,
    },
  },
  actions: {
    setSelectedTask({ commit }, { task = null, is_edit = false }) {
      commit('SET_SELECTED_TASK', { task, is_edit });
    },
    clearSelectedTask({ commit }) {
      commit('SET_SELECTED_TASK', { task: null, is_edit: false });
    },
    setIsEdit({ commit }, is_edit) {
      commit('SET_IS_EDIT', is_edit);
    },
  },
  mutations: {
    SET_SELECTED_TASK(state, task) {
      state.selected_task = task;
    },
    SET_IS_EDIT(state, is_edit) {
      state.selected_task.is_edit = is_edit;
    }
  },
  getters: {
    selected_task: state => state.selected_task,
  },
}
