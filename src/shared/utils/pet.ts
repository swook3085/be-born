import dayjs from 'dayjs'

/** 품종 이름 획득 */
export const getKindCdName = (kindCd: string) => {
  const aIndex = kindCd.indexOf('[') + 1
  const bIndex = kindCd.indexOf(']')
  const cIndex = kindCd.indexOf(']') + 2
  const dIndex = kindCd.length
  return `[${kindCd.substring(aIndex, bIndex)}] ${kindCd.substring(
    cIndex,
    dIndex
  )}`
}

/** 고양이 여부 */
export const isCat = (kindCd: string) => {
  return kindCd.indexOf('고양이') > -1
}

/** 강이지 여부 */
export const isDog = (kindCd: string) => {
  return kindCd.indexOf('개') > -1
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
