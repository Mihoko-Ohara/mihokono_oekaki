import jsonData from '@/static/data/illust.json'

// 状態の管理
export const state = () => ({
  data: jsonData,
})

// getters
export const getters = {
  getAll: (state) => {
    return state.data
  },
}