export const getSearchURL = (params: URLSearchParams, url: string) => {
  return [url, new URLSearchParams(params)].join('?')
}

export const getServiceURL = <T>(
  type: string,
  upParams: Record<keyof T, string | number>
) => getSearchURL(upParams as URLSearchParams, `/api/${type}`)
