/**
 * 정적 데이터 생성
 * API로부터 데이터를 가져와서 JSON 파일로 저장
 * @todo refactoring 필요
 */
const { resolve } = require('node:path')
const fs = require('fs') // 파일 시스템 모듈
const path = require('path') // 경로 조작을 위한 모듈

const { config } = require('dotenv')
config({ path: resolve(__dirname, '.env') })

const API_URL = `${process.env.PET_API_HOST}${process.env.PET_API_BASEURL}/`
const key = process.env.PET_API_KEY

const apiUrlList = [
  /** 시/도 정보 */
  {
    url: `${API_URL}sido?serviceKey=${key}&numOfRows=100&pageNo=1&_type=json`,
    fileName: 'sido'
  },
  /** 강아지 품종 정보 */
  {
    url: `${API_URL}kind?serviceKey=${key}&up_kind_cd=417000&_type=json`,
    fileName: 'dog'
  },
  /** 고양이 품종 정보 */
  {
    url: `${API_URL}kind?serviceKey=${key}&up_kind_cd=422400&_type=json`,
    fileName: 'cat'
  },
  /** 기타 품종 정보 */
  {
    url: `${API_URL}kind?serviceKey=${key}&up_kind_cd=429900&_type=json`,
    fileName: 'etc'
  }
]

const OUTPUT_DIR = path.join(__dirname, 'public', 'data')

// API로부터 데이터를 가져오는 함수
async function fetchData(url, outFile) {
  try {
    const outFilePath = path.join(OUTPUT_DIR, outFile) // 저장할 JSON 파일 경로
    // API 요청
    const response = await fetch(url)
    const data = await response.json() // JSON 형식으로 변환

    // 디렉토리가 존재하지 않으면 생성
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    }
    // 데이터를 JSON 파일로 저장
    fs.writeFileSync(outFilePath, JSON.stringify(data), 'utf-8')
    console.log('Data successfully saved to', url, outFilePath)
  } catch (error) {
    console.error('Error fetching data:', error.message)
  }
}

Promise.all(
  apiUrlList.map(({ url, fileName }) => {
    console.log('Fetching data from', url)
    /** api 호출 */
    return fetchData(url, `${fileName}.json`)
  })
)
