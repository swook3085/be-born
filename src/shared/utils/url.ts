export const getSearchURL = (params: any, url: string) => {
  return [url, new URLSearchParams(params)].join('?')
}

export const getServiceURL = (type: string, upParams: object) =>
  getSearchURL(upParams, `/api/${type}`)
