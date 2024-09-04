const API_KEY = process.env.PET_API_KEY
const API_URL = process.env.PET_API_URL

export const getSearchURL = (params: any, url: string) => {
  return [url, new URLSearchParams(params)].join('&')
}

export const getServiceURL = (type: string, upParams: object) => {
  const params = {
    ...upParams,
    _type: 'json'
  }

  return getSearchURL(params, `${API_URL}${type}?serviceKey=${API_KEY}`)
}
