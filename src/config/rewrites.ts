import { NextConfig } from 'next'

const API_URL = `${process.env.PET_API_HOST}${process.env.PET_API_BASEURL}`
const key = process.env.PET_API_KEY

export const rewrites: NextConfig['rewrites'] = async () => {
  return [
    /** 시군구 조회 */
    {
      source: '/api/sigungu',
      destination: `${API_URL}/sigungu?serviceKey=${key}&_type=json`
    },
    /** 동물 리스트 조회 */
    {
      source: '/api/animal',
      destination: `${API_URL}/abandonmentPublic_v2?serviceKey=${key}&_type=json`
    }
  ]
}
