import { createSlice } from '@reduxjs/toolkit'
import { IAnimalListItem } from '@shared/interface/IPet'

export interface IpetListSlice {
  list: IAnimalListItem[]
  page: number
}

export const petList = createSlice({
  name: 'petList',
  initialState: {
    list: [],
    page: 1,
  },
  reducers: {
    setPetList: (state, action) => {
      state.list = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { setPetList, setPage } = petList.actions
export default petList.reducer
