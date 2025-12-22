export const getSearchURL = (params: URLSearchParams, url: string) => {
  return [url, new URLSearchParams(params)].join('?')
}

/**
 * API URL 생성 함수
 * - 서버 환경: 환경 변수를 사용하여 직접 외부 API 호출
 * - 클라이언트 환경: Next.js rewrites를 통한 프록시 호출
 */
export const getServiceURL = <T>(
  type: string,
  upParams: Record<keyof T, string | number | undefined>
) => {
  // 서버 환경 체크 (서버에만 환경 변수가 존재)
  const isServer = typeof window === 'undefined' && process.env.PET_API_HOST

  if (isServer) {
    // 서버 환경: 직접 API 호출
    const API_URL = `${process.env.PET_API_HOST}${process.env.PET_API_BASEURL}`
    const serviceKey = process.env.PET_API_KEY

    const queryParams = new URLSearchParams()

    // 기본 파라미터 추가
    queryParams.append('serviceKey', serviceKey || '')
    queryParams.append('_type', 'json')

    // 사용자 파라미터 추가
    Object.entries(upParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.append(key, String(value))
      }
    })

    // type에 따른 endpoint 매핑
    const endpointMap: Record<string, string> = {
      animal: '/abandonmentPublic_v2',
      sigungu: '/abandonmentPublicService_v2/sigungu_v2',
      sido: '/sido_v2',
      kind: '/kind_v2'
    }

    const endpoint = endpointMap[type] || `/${type}`
    return `${API_URL}${endpoint}?${queryParams.toString()}`
  } else {
    // 클라이언트 환경: Next.js rewrites 사용
    return getSearchURL(upParams as URLSearchParams, `/api/${type}`)
  }
}
