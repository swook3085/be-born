import dayjs from 'dayjs'

import { AnimallKindCode } from '../constants'

/** 고양이 여부 */
export const isCat = (upKindCd: string) => {
  return upKindCd === AnimallKindCode.CAT
}

/** 강이지 여부 */
export const isDog = (upKindCd: string) => {
  return upKindCd === AnimallKindCode.DOG
}

export const noticeDateDiff = (noticeSdt: string, noticeEdt: string) => {
  const noticeSdtDate = dayjs(noticeSdt)
  const noticeEdtDate = dayjs(noticeEdt)
  return noticeEdtDate.diff(noticeSdtDate, 'day')
}

export const converState = (state: string) => {
  if (state === '공고중') {
    return 'notice'
  }

  return ''
}
