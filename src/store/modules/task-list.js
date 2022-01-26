import { callApiGet } from '@/api'
import endpoints from '@/api/endpoints'

export default {
  namespaced: true,
  state: {
    selected_task: {
      is_edit: false,
      task: null,
    },
    task_list: [],
    comment_list: [],
  },
  actions: {
    async getTaskList({ commit, dispatch }) {
      const response = await callApiGet(endpoints.TASK)
      if (!response.error) {
        commit('SET_TASK_LIST', response)
      }
      dispatch('getCommentList')
    },
    async getCommentList({ commit }) {
      const comment_response = await callApiGet(endpoints.COMMENT)

      if (!comment_response.error) {
        commit('SET_COMMENT_LIST', comment_response)
      }
    },
    clearTaskList({ commit }) {
      commit('SET_TASK_LIST', [])
    },
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
    },
    SET_TASK_LIST(state, task_list) {
      state.task_list = task_list
    },
    SET_COMMENT_LIST(state, comment_list) {
      state.comment_list = comment_list
    }
  },
  getters: {
    selected_task: state => state.selected_task,
    task_list: state => state.task_list,
    comment_list: state => state.comment_list,
  },
}
