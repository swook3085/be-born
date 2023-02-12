import { createSlice } from '@reduxjs/toolkit'
import { dateFormatDash, prevMonthYearStr } from '@shared/utils'

export interface IDetailParam {
  bgnde: string
  endde: string
  upKind: string
  uprCd: string
  orgCd: string
  kind: string
  page: number
  limit: string
  state: string
}

export const detailParam = createSlice({
  name: 'detailParam',
  initialState: {
    upKind: '',
    kind: '',
    uprCd: '',
    orgCd: '',
    bgnde: prevMonthYearStr(3),
    endde: dateFormatDash(new Date()),
    page: 1,
    limit: '20',
    state: '',
  },
  reducers: {
    setParam: (state, action) => {
      state['kind'] = action.payload.kind
      state['upKind'] = action.payload.upKind
      state['uprCd'] = action.payload.uprCd
      state['orgCd'] = action.payload.orgCd
      state['bgnde'] = action.payload.bgnde
      state['endde'] = action.payload.endde
      state['page'] = action.payload.page
    },
  },
})

export const { setParam } = detailParam.actions
export default detailParam.reducer
