import jsonData from '@/static/data/illust.json'
import jsonData2 from '@/static/data/calender.json'

// 状態の管理
export const state = () => ({
  data: jsonData,
  data2:  jsonData2,
})

// getters
export const getters = {
  getAll: (state) => {
    return state.data
  },
  getAll2: (state) => {
    return state.data2
  },
}