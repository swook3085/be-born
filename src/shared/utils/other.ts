import { noticeDateDiff } from './pet'

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const division = <T>(arr: T[], chunk: number) => {
  const length = arr.length
  const divide =
    Math.floor(length / chunk) + (Math.floor(length % chunk) > 0 ? 1 : 0)
  const newArray = []

  for (let i = 0; i <= divide; i++) {
    newArray.push(arr.splice(0, chunk))
  }

  return newArray
}

export const replaceHTTP = (source: string) => {
  const url = source
  if (url.substring(0, 4) === 'http') {
    return source.replace(/^(http?)?/, 'https')
  }
  return source
}

type badgeType = 'info' | 'warning' | 'danger'
export const endDateBadgeType = (
  noticeSdt: string,
  noticeEdt: string
): badgeType => {
  const date = noticeDateDiff(noticeSdt, noticeEdt)
  let type: badgeType = 'info'
  if (date <= 3) {
    type = 'danger'
  }
  if (date <= 7 && date > 3) {
    type = 'warning'
  }

  return type
}
