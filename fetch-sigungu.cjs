/**
 * 개발 서버를 통해 시군구 데이터 가져오기
 * 사용법: node fetch-sigungu.cjs
 */
const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = path.join(__dirname, 'public', 'data')
const BASE_URL = 'http://localhost:3000' // 개발 서버 주소

// 시군구 데이터를 가져오는 함수
async function fetchSigunguData() {
  try {
    console.log('Fetching sigungu data through Next.js API...')
    
    // sido.json 파일 읽기
    const sidoFilePath = path.join(OUTPUT_DIR, 'sido.json')
    if (!fs.existsSync(sidoFilePath)) {
      console.error('sido.json file not found.')
      return
    }
    
    const sidoFileContent = fs.readFileSync(sidoFilePath, 'utf-8')
    const sidoData = JSON.parse(sidoFileContent)
    const sidoList = sidoData?.response?.body?.items?.item || []

    console.log(`Found ${sidoList.length} sido items`)

    // 각 시도별로 시군구 데이터 가져오기
    const sigunguMap = {}
    
    for (const sido of sidoList) {
      const sigunguUrl = `${BASE_URL}/api/sigungu?upr_cd=${sido.orgCd}`
      console.log(`Fetching sigungu for ${sido.orgdownNm} (${sido.orgCd})`)
      
      try {
        const response = await fetch(sigunguUrl)
        const data = await response.json()
        const sigunguList = data?.response?.body?.items?.item || []
        
        // 시도 코드를 키로 하여 시군구 목록 저장
        sigunguMap[sido.orgCd] = sigunguList
        console.log(`  ✓ Found ${sigunguList.length} sigungu items`)
        
        // API 호출 제한 방지를 위한 딜레이
        await new Promise(resolve => setTimeout(resolve, 200))
      } catch (error) {
        console.error(`  ✗ Error fetching sigungu for ${sido.orgdownNm}:`, error.message)
        sigunguMap[sido.orgCd] = []
      }
    }

    // 시군구 데이터를 JSON 파일로 저장
    const outFilePath = path.join(OUTPUT_DIR, 'sigungu.json')
    const output = {
      response: {
        header: {
          resultCode: '00',
          resultMsg: 'NORMAL SERVICE.'
        },
        body: {
          items: sigunguMap
        }
      }
    }
    
    fs.writeFileSync(outFilePath, JSON.stringify(output, null, 2), 'utf-8')
    console.log('\n✓ Sigungu data successfully saved to', outFilePath)
    
    // 통계 출력
    const totalSigungu = Object.values(sigunguMap).reduce((sum, list) => sum + list.length, 0)
    console.log(`\nTotal: ${totalSigungu} sigungu items across ${sidoList.length} sido`)
  } catch (error) {
    console.error('Error fetching sigungu data:', error.message)
  }
}

// 실행
console.log('='.repeat(60))
console.log('시군구 데이터 가져오기')
console.log('='.repeat(60))
console.log('\n⚠️  개발 서버가 실행 중이어야 합니다 (pnpm run dev)\n')

fetchSigunguData()


