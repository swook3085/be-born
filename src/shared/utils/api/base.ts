import {
  HttpContentType,
  HttpHeader,
  HttpMethod
} from '@beborn/shared/constants/http'
import type { IPetResponse } from '@beborn/shared/interfaces'
const { CONTENT_TYPE } = HttpHeader

export type FnCustomFetch = <T = unknown>(
  url: string,
  option?: RequestInit
) => Promise<IPetResponse<T>>

/**
 * 기본 fetch
 * 최하위 try-catch하기 위해 사용
 */
export const fetchInterface: FnCustomFetch = async (url, option) => {
  try {
    const response = await fetch(url, {
      ...option,
      cache: 'force-cache'
    })
    if (!response.ok) {
      const responseText = await response.text()
      const errorMessage = responseText + '\n' + "Response status isn't OK."
      throw new Error(errorMessage)
    }

    if (response.headers.get(CONTENT_TYPE)?.includes(HttpContentType.JSON)) {
      const data = await response.json()

      return data.response.body
    }

    return response
  } catch (error) {
    console.error(error)
  }
}

/**
 * credentials, accessToken을 추가한 fetch
 * credentials, accessToken: 로그인 상태를 유지하기 위해 사용
 */
export const baseFetch = async <S>(
  url: string,
  option: RequestInit = { method: HttpMethod.GET }
) => {
  const response = await fetchInterface<S>(url, option)

  return response
}
